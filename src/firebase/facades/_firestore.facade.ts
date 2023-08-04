import {
    doc,
    getDoc,
    getDocs,
    DocumentData,
    QuerySnapshot,
    CollectionReference,
    DocumentSnapshot
} from 'firebase/firestore'
import { FirebaseBaseFacade } from './_base.facade'

type DocumentResponse = DocumentSnapshot<DocumentData, DocumentData>
type DocumentListResponse = QuerySnapshot<DocumentData, DocumentData>

export class FirestoreBaseFacade extends FirebaseBaseFacade {
    private readonly instance: CollectionReference<DocumentData, DocumentData>
    public _repository = {
        getAll: <Data>(): Promise<Data> =>
            getDocs(this.instance).then(response =>
                this.getListDocuments(response)
            ) as Promise<Data>,
        getById: async <Data>(id: string): Promise<Data> => {
            const reference = doc(this._firestoreApp, this.collection, id)
            return getDoc(reference).then(response =>
                this.getDocument(response)
            ) as Promise<Data>
        },
        update: () => {},
        create: () => {},
        delete: () => {}
    }

    constructor(private collection: string) {
        super()
        this.instance = this._collection(this._firestoreApp, this.collection)
    }

    private getDocument(response: DocumentResponse) {
        return { ...response.data(), id: response.id }
    }

    private getListDocuments(data: DocumentListResponse) {
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    }
}
