import { DocumentReference, Timestamp } from 'firebase/firestore'

export interface IPrayerWall {
    active: boolean
    userApprover: any
    authorName: string
    description: string
    creationDate: string | Date
}

export interface IRegisterPrayerWallForm {
    category: string
    authorName: string
    description: string
}

export interface IPrayerWallResponse {
    id: string
    active: boolean
    authorName: string
    description: string
    creationDate: Timestamp
    category: DocumentReference
    userApprover?: DocumentReference
}

export interface IRegisterPrayerWall {
    active: boolean
    authorName: string
    description: string
    category: DocumentReference
}
