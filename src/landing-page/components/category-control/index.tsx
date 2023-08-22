import Styles from './styles'
import React, { useEffect, useState } from 'react'
import { ISelectItem } from '@/components/@interface/select.interface'

export const defaultCategoryControl: ISelectItem = { value: 0, label: 'Todos' }

interface ILPCategoryControl {
    className?: string
    items: ISelectItem[]
    selected?: ISelectItem
    showAllOption?: boolean
    onSelect: (item: ISelectItem) => void
}
const LPCategoryControl: React.FC<ILPCategoryControl> = props => {
    const { items, onSelect, selected, className, showAllOption = true } = props
    const [itemsControl, setItemsControl] = useState<ISelectItem[]>([])

    useEffect(() => {
        if (showAllOption) setItemsControl([defaultCategoryControl, ...items])
        else setItemsControl(items)
    }, [])

    return (
        <Styles.Container className={className}>
            {itemsControl.map((item, index) => (
                <Styles.Title
                    key={index}
                    onClick={() => onSelect(item)}
                    className={selected?.value === item.value ? 'active' : ''}
                >
                    {item.label}
                </Styles.Title>
            ))}
        </Styles.Container>
    )
}

export default LPCategoryControl
