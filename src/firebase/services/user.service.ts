import { UserFacade } from '../facades/user.facade'
import { UserRoleFacade } from '../facades/user-role.facade'
import { IUser, IUserResponse, IUserRole } from '@/interfaces/user.interface'

const userFacade = new UserFacade()
const userRoleFacade = new UserRoleFacade()

export class UserService {
    public getAll() {
        try {
            return userFacade._repository.getAll<IUserResponse>()
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
            return { ...user, role }
        } catch (error) {
            throw error
        }
    }
}
