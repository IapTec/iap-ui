import { FirestoreBaseFacade } from './_firestore.facade'

export class PrayerCategoryFacade extends FirestoreBaseFacade {
    constructor() {
        super('PrayerCategory')
    }
}
