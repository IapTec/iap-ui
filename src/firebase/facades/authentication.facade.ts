import { FirebaseError } from 'firebase/app'
import { FirebaseBaseFacade } from './_base.facade'
import {
    ICredential,
    ILoginResponse
} from '@/interfaces/authentication.interface'

export class AuthenticationFacade extends FirebaseBaseFacade {
    constructor() {
        super()
    }

    public async singUp(credential: ICredential) {
        try {
            const response = await this._auth.createUserWithEmailAndPassword(
                this._authApp,
                credential.email,
                credential.password
            )

            return response
        } catch (error) {
            throw this.getError(error as FirebaseError)
        }
    }

    public async login(credential: ICredential): Promise<ILoginResponse> {
        try {
            const { user } = await this._auth.signInWithEmailAndPassword(
                this._authApp,
                credential.email,
                credential.password
            )

            return {
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber,
                displayName: user.displayName,
                refreshToken: user.refreshToken,
                emailVerified: user.emailVerified
            }
        } catch (error) {
            console.log(error)
            throw this.getError(error as FirebaseError)
        }
    }
}
