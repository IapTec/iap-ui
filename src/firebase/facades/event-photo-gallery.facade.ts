import { FirestoreBaseFacade } from './_firestore.facade'

export class EventPhotoGalleryFacade extends FirestoreBaseFacade {
    constructor() {
        super('EventPhotoGallery')
    }
}
