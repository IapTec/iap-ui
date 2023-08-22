import { PrayerFacade } from '../facades/prayer.facade'
import { PrayerCategoryFacade } from '../facades/prayer-category.facade'
import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore'
import {
    IPrayerWallResponse,
    IRegisterPrayerWall
} from '@/interfaces/prayer/prayer-wall.interface'

const prayerFacade = new PrayerFacade()
const prayerCategoryFacade = new PrayerCategoryFacade()

export class PrayerService {
    public getAll() {
        try {
            return prayerFacade._repository.getAll<IPrayerWallResponse[]>()
        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<any> {
        try {
            const prayer =
                await prayerFacade._repository.getById<IPrayerWallResponse>(id)

            const category =
                await prayerCategoryFacade._repository.getById<any>(
                    prayer.category.id
                )

            category.id = Number(category.id)
            return {
                ...prayer,
                category,
                creationDate: prayer.creationDate.toDate()
            }
        } catch (error) {
            throw error
        }
    }

    public async create(payload: IRegisterPrayerWall) {
        return prayerFacade._repository.create({
            ...payload,
            userApprover: '',
            creationDate: Timestamp.now(),
            category: this.getCategory(payload.category)
        })
    }

    public update(payload: IPrayerWallResponse, id: string, getRoleRef = true) {
        if (getRoleRef) payload.category = this.getCategory(payload.category)
        return prayerFacade._repository.update(payload, id)
    }

    public delete(user: IPrayerWallResponse) {
        return this.update({ ...user, active: false }, user.id, false)
    }

    private getCategory(ref: DocumentReference<DocumentData, DocumentData>) {
        return prayerCategoryFacade.getDocumentRef(String(ref))
    }
}
