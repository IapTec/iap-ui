import { FirestoreBaseFacade } from './_firestore.facade'

export class PrayerFacade extends FirestoreBaseFacade {
    constructor() {
        super('PrayerWall')
    }
}
