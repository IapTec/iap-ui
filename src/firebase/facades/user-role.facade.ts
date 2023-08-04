import { FirestoreBaseFacade } from './_firestore.facade'

export class UserRoleFacade extends FirestoreBaseFacade {
    constructor() {
        super('UserRole')
    }
}
