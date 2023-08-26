import { DocumentReference, Timestamp } from 'firebase/firestore'

export interface IPartner {
    name: string
    email: string
    active: boolean
    category: any
    userCreator: any
    imageUrl: string
    telephone: string
    portfolioUrl: string
    creationDate: string | Date
    occupationDescription: string
}

export interface IPartnerResponse {
    id: string
    name: string
    email: string
    active: boolean
    imageUrl: string
    telephone: string
    portfolioUrl: string
    creationDate: Timestamp
    category: DocumentReference
    occupationDescription: string
    userCreator: DocumentReference
}
