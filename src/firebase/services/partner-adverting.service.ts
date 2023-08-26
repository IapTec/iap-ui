import { UserFacade } from '../facades/user.facade'
import { PartnerFacade } from '../facades/partner.facade'
import { PartnerCategoryFacade } from '../facades/partner-category.facade'
import { PartnerAdvertingFacade } from '../facades/partner-adverting.facade'
import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore'

const userFacade = new UserFacade()
const partnerFacade = new PartnerFacade()
const partnerCategory = new PartnerCategoryFacade()
const partnerAdvertingFacade = new PartnerAdvertingFacade()

export class PartnerAdvertingService {
    public async getAll() {
        try {
            return partnerAdvertingFacade._repository.getAll<any[]>()
        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<any> {
        try {
            const data = await partnerAdvertingFacade._repository.getById<any>(
                id
            )

            const userCreator = await userFacade._repository.getById<any>(
                data.userCreator.id
            )

            const partner = await partnerFacade._repository.getById<any>(
                data.partner.id
            )

            userCreator.id = Number(userCreator.id)
            return {
                ...data,
                partner,
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
            partner: this.getPartner(payload.partner),
            userCreator: this.getUserCreator(payload.userCreator)
        })
    }

    public update(payload: any, id: string, getRoleRef = true) {
        if (getRoleRef) {
            payload.partner = this.getPartner(payload.partner)
            payload.userCreator = this.getUserCreator(payload.userCreator)
        }

        return partnerFacade._repository.update(payload, id)
    }

    public delete(user: any) {
        return this.update({ ...user, active: false }, user.id, false)
    }

    private getUserCreator(ref: DocumentReference<DocumentData, DocumentData>) {
        return userFacade.getDocumentRef(String(ref))
    }

    private getPartner(ref: DocumentReference<DocumentData, DocumentData>) {
        return partnerCategory.getDocumentRef(String(ref))
    }
}
