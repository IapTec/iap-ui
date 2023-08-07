import React from 'react'
import Styles from './styles'
import AdminSideMenu from '@/components/admin/ui/side-menu'

interface IAdminLayoutInterface {
    children: React.ReactNode
}

const AdminLayout: React.FC<IAdminLayoutInterface> = ({ children }) => {
    return (
        <Styles.Container>
            <Styles.Aside>
                <AdminSideMenu />
            </Styles.Aside>
            <Styles.Main>{children}</Styles.Main>
        </Styles.Container>
    )
}

export default AdminLayout
