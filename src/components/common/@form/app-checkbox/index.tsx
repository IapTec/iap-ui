import Styles from './styles'
import React, { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export interface AppCheckboxProps
    extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    error?: FieldError
    className?: string
    register?: UseFormRegister<any>
    label?: string | React.ReactNode
}

const AppCheckbox: React.FC<AppCheckboxProps> = props => {
    const { id, type, error, label, register, className, ...rest } = props

    const registerValue = register ? register : () => {}

    return (
        <Styles.FormGroup className={className || ''}>
            <Styles.Checkbox
                id={id}
                {...rest}
                type="checkbox"
                {...registerValue(id)}
            />

            <Styles.Label htmlFor={id}>{label || ''}</Styles.Label>
        </Styles.FormGroup>
    )
}

export default AppCheckbox
