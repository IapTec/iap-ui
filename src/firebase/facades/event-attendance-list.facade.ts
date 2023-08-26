import { FirestoreBaseFacade } from './_firestore.facade'

export class EventAttendanceListFacade extends FirestoreBaseFacade {
    constructor() {
        super('EventAttendanceList')
    }
}
