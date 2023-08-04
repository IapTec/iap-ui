import { DocumentReference } from 'firebase/firestore'

export interface IUserRole {
    id: number
    label: string
}

export interface IUserResponse {
    uuid: string
    email: string
    image: string
    name: string
    active: boolean
    role: DocumentReference
    creationDate: string | Date
}

export interface IUser {
    uuid: string
    name: string
    email: string
    image: string
    role: IUserRole
    active: boolean
    creationDate: string | Date
}
