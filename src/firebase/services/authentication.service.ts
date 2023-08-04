import { ICredential } from '@/interfaces/authentication.interface'
import { AuthenticationFacade } from '@/firebase/facades/authentication.facade'

const authenticationFacade = new AuthenticationFacade()

export class AuthenticationService {
    public singUp(credential: ICredential) {
        return authenticationFacade.singUp(credential)
    }

    public login(credential: ICredential) {
        return authenticationFacade.login(credential)
    }
}
