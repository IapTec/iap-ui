import Styles from './styles'
import React, { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { ISelectItem } from '@/components/@interface/select.interface'

export interface AppSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    id: string
    error?: FieldError
    className?: string
    data: ISelectItem[]
    defaultLabel?: string
    register?: UseFormRegister<any>
    label?: string | React.ReactNode
}

const AppSelect: React.FC<AppSelectProps> = props => {
    const {
        id,
        type,
        error,
        label,
        register,
        className,
        defaultLabel,
        data,
        ...rest
    } = props

    const registerValue = register ? register : () => {}

    return (
        <Styles.FormGroup className={className || ''}>
            <Styles.Label htmlFor={id}>{label || ''}</Styles.Label>

            <select id={id} {...rest} {...registerValue(id)}>
                <option value="">{defaultLabel || 'Selectione'}</option>
                {data.map((item, index) => (
                    <option key={index} value={item.value as any}>
                        {item.label}
                    </option>
                ))}
            </select>

            {/* <Styles.Checkbox
                id={id}
                {...rest}
                type="checkbox"
                {...registerValue(id)}
            /> */}
        </Styles.FormGroup>
    )
}

export default AppSelect
