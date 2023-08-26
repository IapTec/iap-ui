import { FirestoreBaseFacade } from './_firestore.facade'

export class EventFacade extends FirestoreBaseFacade {
    constructor() {
        super('Event')
    }
}
