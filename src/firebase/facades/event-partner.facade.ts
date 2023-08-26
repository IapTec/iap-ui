import { FirestoreBaseFacade } from './_firestore.facade'

export class EventPartnerFacade extends FirestoreBaseFacade {
    constructor() {
        super('EventPartner')
    }
}
