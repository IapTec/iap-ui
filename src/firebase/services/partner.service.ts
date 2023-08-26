import { UserFacade } from '../facades/user.facade'
import { PartnerFacade } from '../facades/partner.facade'
import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore'
import { IPartnerResponse } from '@/interfaces/partner/partner.interface'
import { PartnerCategoryFacade } from '../facades/partner-category.facade'

const userFacade = new UserFacade()
const partnerFacade = new PartnerFacade()
const partnerCategory = new PartnerCategoryFacade()

export class PartnerService {
    public getAll() {
        try {
            return partnerFacade._repository.getAll<IPartnerResponse[]>()
        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<any> {
        try {
            const data =
                await partnerFacade._repository.getById<IPartnerResponse>(id)

            const userCreator = await userFacade._repository.getById<any>(
                data.userCreator.id
            )

            const category = await partnerCategory._repository.getById<any>(
                data.userCreator.id
            )

            userCreator.id = Number(userCreator.id)
            return {
                ...data,
                category,
                userCreator,
                creationDate: data.creationDate.toDate()
            }
        } catch (error) {
            throw error
        }
    }

    public async create(payload: any) {
        return partnerFacade._repository.create({
            ...payload,
            creationDate: Timestamp.now(),
            category: this.getCategory(payload.category),
            userCreator: this.getUserCreator(payload.userCreator)
        })
    }

    public update(payload: IPartnerResponse, id: string, getRoleRef = true) {
        if (getRoleRef) {
            payload.category = this.getCategory(payload.category)
            payload.userCreator = this.getUserCreator(payload.userCreator)
        }

        return partnerFacade._repository.update(payload, id)
    }

    public delete(user: IPartnerResponse) {
        return this.update({ ...user, active: false }, user.id, false)
    }

    private getUserCreator(ref: DocumentReference<DocumentData, DocumentData>) {
        return userFacade.getDocumentRef(String(ref))
    }

    private getCategory(ref: DocumentReference<DocumentData, DocumentData>) {
        return partnerCategory.getDocumentRef(String(ref))
    }
}
