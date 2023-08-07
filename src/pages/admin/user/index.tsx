import { setLoading } from '@/hooks'
import { useRouter } from 'next/router'
import Styles from '@/styles/pages/common'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import { IUserResponse } from '@/interfaces/user.interface'
import { getFormatedDate } from '@/functions/date.function'
import AppSelect from '@/components/common/@form/app-select'
import { AlertService } from '@/services/common/alert.service'
import { UserService } from '@/firebase/services/user.service'
import { USER_ROLE_OPTIONS } from '@/contants/user-role.contant'
import ActionTable from '@/components/common/app-table/action-table'
import AppTable, {
    DataCell,
    TableRow,
    HeaderCell
} from '@/components/common/app-table'

const userService = new UserService()
const alertService = new AlertService()

const AdminUser: React.FC = () => {
    const router = useRouter()
    const [users, setUsers] = useState<IUserResponse[]>([])
    const [filterType, setFilterType] = useState<number | null>(null)
    const [filterStatus, setFilterStatus] = useState<boolean | null>(null)

    const filteredUsers = users.filter(user => {
        const hasFilterType = filterType !== null
        const hasFilterStatus = filterStatus !== null

        const valueFilterType = !hasFilterType
            ? true
            : Number(user.role.id) === filterType

        const valueFilterStatus = !hasFilterStatus
            ? true
            : user.active === filterStatus

        return valueFilterType && valueFilterStatus
    })

    const goToRegister = (id = '') => router.push(`/admin/user/register/${id}`)

    const handleDelete = async (user: IUserResponse) => {
        try {
            setLoading(true)
            await userService.delete(user)

            alertService.show('Usuário removido com sucesso')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            setLoading(true)
            const data = await userService.getAll()
            setUsers(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alertService.error('')
        }
    }

    const _getSelectStatusValue = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { value } = event.target
        const isAll = value === ''
        const isTrue = value === 'true'

        return isAll ? null : isTrue
    }

    const _getSelectTypeValue = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { value } = event.target
        const isAll = value === ''

        return isAll ? null : Number(value)
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <AppHead title="Usuários" />

            <Styles.Container>
                <Styles.PageNav>
                    <Styles.PageTitle>Usuários</Styles.PageTitle>
                    <Styles.Button onClick={() => goToRegister()}>
                        Novo
                    </Styles.Button>
                </Styles.PageNav>

                <Styles.FilterNav>
                    <AppSelect
                        id="role"
                        label="Status"
                        value={filterStatus as any}
                        className="!w-1/4"
                        onChange={e =>
                            setFilterStatus(_getSelectStatusValue(e))
                        }
                        data={[
                            { label: 'Ativos', value: true },
                            { label: 'Inativos', value: false }
                        ]}
                    />

                    <AppSelect
                        id="role"
                        className="!w-1/4"
                        value={filterType as any}
                        label="Tipo de usuário"
                        onChange={e => setFilterType(_getSelectTypeValue(e))}
                        data={[...USER_ROLE_OPTIONS]}
                    />
                </Styles.FilterNav>

                <AppTable
                    header={
                        <TableRow>
                            <HeaderCell>Nome</HeaderCell>
                            <HeaderCell>e-mail</HeaderCell>
                            <HeaderCell>Data cadastro</HeaderCell>
                            <HeaderCell>Ações</HeaderCell>
                        </TableRow>
                    }
                    body={filteredUsers.map((item, index) => (
                        <TableRow key={index}>
                            <DataCell>{item.name}</DataCell>
                            <DataCell>{item.email}</DataCell>
                            <DataCell>
                                {getFormatedDate(item.creationDate)}
                            </DataCell>
                            <DataCell>
                                <ActionTable
                                    onEdit={() => goToRegister(item.id)}
                                    onDelete={() => handleDelete(item)}
                                />
                            </DataCell>
                        </TableRow>
                    ))}
                />
            </Styles.Container>
        </>
    )
}

export default AdminUser
