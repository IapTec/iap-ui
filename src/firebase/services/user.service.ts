import { Timestamp } from 'firebase/firestore'
import { UserFacade } from '../facades/user.facade'
import { UserRoleFacade } from '../facades/user-role.facade'
import { AuthenticationService } from './authentication.service'
import { IUser, IUserResponse, IUserRole } from '@/interfaces/user.interface'

const userFacade = new UserFacade()
const userRoleFacade = new UserRoleFacade()
const authenticationService = new AuthenticationService()

export class UserService {
    public getAll() {
        try {
            return userFacade._repository.getAll<IUserResponse[]>()
        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<IUser> {
        try {
            const user = await userFacade._repository.getById<IUserResponse>(id)
            const role = await userRoleFacade._repository.getById<IUserRole>(
                user.role.id
            )

            role.id = Number(role.id)
            return {
                ...user,
                role,
                creationDate: user.creationDate.toDate()
            }
        } catch (error) {
            throw error
        }
    }

    public async create(payload: IUserResponse) {
        payload.role = userRoleFacade.getDocumentRef(String(payload.role))
        payload.creationDate = Timestamp.now()
        payload.image = payload.image || ''

        return authenticationService
            .singUp({ email: payload.email, password: 'Adminapc01.' })
            .then(() => userFacade._repository.create(payload))
    }

    public update(payload: IUserResponse, id: string) {
        payload.role = userRoleFacade.getDocumentRef(String(payload.role))
        return userFacade._repository.update(payload, id)
    }

    public delete(user: IUserResponse) {
        user.active = false
        return this.update(user, user.id)
    }
}
