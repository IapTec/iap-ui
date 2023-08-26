import { FirestoreBaseFacade } from './_firestore.facade'

export class PartnerCategoryFacade extends FirestoreBaseFacade {
    constructor() {
        super('PartnerCategory')
    }
}
