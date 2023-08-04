import Styles from './styles'
import React, { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { IRadioButtonItem } from '@/components/@interface/radio-button.interface'

export interface AppRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    error?: FieldError
    className?: string
    data: IRadioButtonItem[]
    register?: UseFormRegister<any>
    label?: string | React.ReactNode
    itemsDirection?: 'row' | 'column'
}

const AppRadio: React.FC<AppRadioProps> = props => {
    const {
        id,
        data,
        type,
        error,
        label,
        register,
        className,
        itemsDirection,
        ...rest
    } = props

    const registerValue = register ? register : () => {}
    const direction = itemsDirection || 'row'

    return (
        <Styles.FormGroup className={className || ''}>
            <Styles.Label htmlFor={id}>{label || ''}</Styles.Label>

            <Styles.Group direction={direction}>
                {data.map((item, index) => (
                    <Styles.Item key={index}>
                        <Styles.Radio
                            name={id}
                            {...rest}
                            type="radio"
                            id={`${id}-${index}`}
                            {...registerValue(id)}
                            value={item.value as any}
                        />

                        <Styles.ItemLabel htmlFor={`${id}-${index}`}>
                            {item.label}
                        </Styles.ItemLabel>
                    </Styles.Item>
                ))}
            </Styles.Group>

            {error?.message && <Styles.Span>{error?.message}</Styles.Span>}
        </Styles.FormGroup>
    )
}

export default AppRadio
