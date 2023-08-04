import { FirestoreBaseFacade } from './_firestore.facade'

export class UserFacade extends FirestoreBaseFacade {
    constructor() {
        super('User')
    }
}
