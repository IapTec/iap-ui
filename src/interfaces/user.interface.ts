import { DocumentReference, Timestamp } from 'firebase/firestore'

export interface IUserRole {
    id: number
    label: string
}

export interface IUserResponse {
    id: string
    email: string
    image: string
    name: string
    active: boolean
    creationDate: Timestamp
    role: DocumentReference
}

export interface IUser {
    id: string
    name: string
    email: string
    image: string
    role: IUserRole
    active: boolean
    creationDate: string | Date
}

export interface IUserForm extends Omit<IUser, 'role'> {
    role: number
}
