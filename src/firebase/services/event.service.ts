import { UserFacade } from '../facades/user.facade'
import { EventFacade } from '../facades/event.facade'
import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore'
import { IEventResponse } from '@/interfaces/event/event.interface'

const userFacade = new UserFacade()
const eventFacade = new EventFacade()

export class EventService {
    public getAll() {
        try {
            return eventFacade._repository.getAll<IEventResponse[]>()
        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<any> {
        try {
            const prayer = await eventFacade._repository.getById<any>(id)

            const userCreator = await userFacade._repository.getById<any>(
                prayer.category.id
            )

            userCreator.id = Number(userCreator.id)
            return {
                ...prayer,
                userCreator,
                creationDate: prayer.creationDate.toDate()
            }
        } catch (error) {
            throw error
        }
    }

    public async create(payload: IEventResponse) {
        return eventFacade._repository.create({
            ...payload,
            creationDate: Timestamp.now(),
            userCreator: this.getUserCreator(payload.userCreator)
        })
    }

    public update(payload: any, id: string, getRoleRef = true) {
        if (getRoleRef)
            payload.category = this.getUserCreator(payload.userCreator)
        return eventFacade._repository.update(payload, id)
    }

    public delete(user: any) {
        return this.update({ ...user, active: false }, user.id, false)
    }

    private getUserCreator(ref: DocumentReference<DocumentData, DocumentData>) {
        return userFacade.getDocumentRef(String(ref))
    }
}
