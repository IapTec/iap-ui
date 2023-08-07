import { ISelectItem } from '@/components/@interface/select.interface'
import { UserRole } from '@/enums/user-role.enum'

export const USER_ROLE_OPTIONS: ISelectItem[] = [
    { label: 'Administrator', value: Number(UserRole.Admin) },
    { label: 'Membro', value: Number(UserRole.Member) }
]
