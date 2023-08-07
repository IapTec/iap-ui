import { setLoading } from '@/hooks'
import { useRouter } from 'next/router'
import Styles from '@/styles/pages/common'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import { IUserResponse } from '@/interfaces/user.interface'
import { getFormatedDate } from '@/functions/date.function'
import { AlertService } from '@/services/common/alert.service'
import { UserService } from '@/firebase/services/user.service'
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

                <AppTable
                    header={
                        <TableRow>
                            <HeaderCell>Nome</HeaderCell>
                            <HeaderCell>e-mail</HeaderCell>
                            <HeaderCell>Data cadastro</HeaderCell>
                            <HeaderCell>Ações</HeaderCell>
                        </TableRow>
                    }
                    body={users.map((item, index) => (
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
