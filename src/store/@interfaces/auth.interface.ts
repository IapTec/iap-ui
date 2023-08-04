import { UserRole } from '@/enums/user-role.enum'
import { IUser } from '@/interfaces/user.interface'

export interface IAuthState {
    role: UserRole | number
    user: IUser
    token: string
}
