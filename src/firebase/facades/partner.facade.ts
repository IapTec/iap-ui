import { FirestoreBaseFacade } from './_firestore.facade'

export class PartnerFacade extends FirestoreBaseFacade {
    constructor() {
        super('Partner')
    }
}
