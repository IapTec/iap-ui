import { DocumentReference, Timestamp } from 'firebase/firestore'

export interface IEvent {
    title: string
    active: boolean
    banner: string
    mapHTML: string
    userCreator: any
    streamUrl: string
    contentHTML: string
    creationDate: string | Date
    dateReleaseStream: string | Date
}

export interface IEventResponse {
    id: string
    title: string
    banner: string
    active: boolean
    mapHTML: string
    streamUrl: string
    contentHTML: string
    creationDate: Timestamp
    dateReleaseStream: Timestamp
    userCreator: DocumentReference
}
