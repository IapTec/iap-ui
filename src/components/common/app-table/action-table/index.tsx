import React from 'react'
import Styles from './styles'
import Theme from '@/styles/ts/theme'
import { FiEdit } from 'react-icons/fi'
import { HiOutlineTrash } from 'react-icons/hi'
import { IActionTable } from '@/components/@interface/table.interface'

interface IActionTableProps {
    items?: IActionTable[]
    onEdit?: Function
    showEdit?: boolean
    onDelete?: Function
    showDelete?: boolean
}

const ActionTable: React.FC<IActionTableProps> = props => {
    const { items, onEdit, showEdit, onDelete, showDelete } = props

    const isShowEdit = showEdit === undefined ? true : showEdit
    const isShowDelete = showDelete === undefined ? true : showDelete

    const handleEdit = () => {
        if (onEdit) onEdit()
    }

    const handleDelete = () => {
        if (onDelete) onDelete()
    }

    return (
        <Styles.Container>
            {items?.map((item, index) => (
                <Styles.Button
                    key={index}
                    title={item.title}
                    onClick={item.onClick}
                >
                    {item.icon}
                </Styles.Button>
            ))}

            {isShowEdit && (
                <Styles.Button
                    title="Editar"
                    onClick={handleEdit}
                    color={Theme.colors.text}
                >
                    <FiEdit />
                </Styles.Button>
            )}

            {isShowDelete && (
                <Styles.Button
                    title="Remover"
                    onClick={handleDelete}
                    color={Theme.colors.red}
                >
                    <HiOutlineTrash />
                </Styles.Button>
            )}
        </Styles.Container>
    )
}

export default ActionTable
