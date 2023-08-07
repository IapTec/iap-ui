import {
    doc,
    getDoc,
    getDocs,
    deleteDoc,
    DocumentData,
    QuerySnapshot,
    CollectionReference,
    DocumentSnapshot,
    updateDoc,
    addDoc
} from 'firebase/firestore'
import { FirebaseBaseFacade } from './_base.facade'

type DocumentResponse = DocumentSnapshot<DocumentData, DocumentData>
type DocumentListResponse = QuerySnapshot<DocumentData, DocumentData>

export class FirestoreBaseFacade extends FirebaseBaseFacade {
    private readonly instance: CollectionReference<DocumentData, DocumentData>
    public _repository = {
        getAll: <Data>() => this.getAll<Data>(),
        getById: <Data>(id: string) => this.getById<Data>(id),
        update: (payload: object, id: string) => this.update(payload, id),
        create: (payload: object) => this.create(payload),
        delete: (id: string) => this.delete(id)
    }

    constructor(private collection: string) {
        super()
        this.instance = this._collection(this._firestoreApp, this.collection)
    }

    public getDocumentRef(id: string) {
        return doc(this._firestoreApp, this.collection, id)
    }

    private getDocument(response: DocumentResponse) {
        return { ...response.data(), id: response.id }
    }

    private getListDocuments(data: DocumentListResponse) {
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    }

    private async getAll<Data>(): Promise<Data> {
        return getDocs(this.instance).then(
            response => this.getListDocuments(response) as Data
        )
    }

    private async getById<Data>(id: string): Promise<Data> {
        console.log('ID', id)
        const reference = this.getDocumentRef(id)
        return getDoc(reference).then(
            response => this.getDocument(response) as Data
        )
    }

    private delete(id: string) {
        const reference = this.getDocumentRef(id)
        return deleteDoc(reference)
    }

    private update(payload: object, id: string) {
        const reference = this.getDocumentRef(id)
        return updateDoc(reference, payload)
    }

    private create(payload: object) {
        return addDoc(this.instance, payload)
    }
}
