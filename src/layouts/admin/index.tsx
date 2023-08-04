import React from 'react'
import Styles from './styles'

interface IAdminLayoutInterface {
    children: React.ReactNode
}

const AdminLayout: React.FC<IAdminLayoutInterface> = ({ children }) => {
    return (
        <Styles.Container>
            <section>{children}</section>
        </Styles.Container>
    )
}

export default AdminLayout
