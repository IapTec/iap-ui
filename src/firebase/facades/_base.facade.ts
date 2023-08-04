import * as auth from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { collection } from 'firebase/firestore'
import { FIREBASE_MESSAGES, FirebaseMessageCode } from '../messages'
import {
    firebaseAuth,
    firebaseFirestore
} from '@/config/firebase/initialize.config'

export class FirebaseBaseFacade {
    public _auth = auth
    public _authApp = firebaseAuth
    public _firestoreApp = firebaseFirestore

    public _collection = collection

    public getErrorMessage(code: FirebaseMessageCode) {
        return FIREBASE_MESSAGES[code] || FIREBASE_MESSAGES.default
    }

    public getError(error: FirebaseError) {
        return {
            ...error,
            message: this.getErrorMessage(error.code as FirebaseMessageCode)
        }
    }
}
