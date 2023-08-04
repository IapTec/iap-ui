import Styles from './styles'
import { FieldError, UseFormRegister } from 'react-hook-form'
import React, { forwardRef, InputHTMLAttributes } from 'react'

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name?: string
    type?: string
    label?: string
    error?: FieldError
    className?: string
    icon?: React.ReactNode
    leftSlot?: React.ReactNode
    rightSlot?: React.ReactNode
    register?: UseFormRegister<any>
}

const AppInput: React.FC<AppInputProps> = forwardRef<
    HTMLInputElement,
    AppInputProps
>((props, ref) => {
    const {
        id,
        name,
        icon,
        type,
        error,
        label,
        register,
        leftSlot,
        rightSlot,
        className,
        ...rest
    } = props

    const registerValue = register ? register : () => {}

    const rightSlotControl = () => {
        if (rightSlot) return rightSlot
        else if (icon)
            return <Styles.IconContainer>{icon}</Styles.IconContainer>
        else return <></>
    }

    return (
        <Styles.Container className={className || ''}>
            <Styles.Label>{label || ''}</Styles.Label>

            <Styles.Wrapper>
                {rightSlotControl()}
                <Styles.Input
                    id={id}
                    {...rest}
                    ref={ref}
                    name={name}
                    {...registerValue(id)}
                    type={type || 'text'}
                />
                {leftSlot || <></>}
            </Styles.Wrapper>

            {error?.message && <Styles.Span>{error?.message}</Styles.Span>}
        </Styles.Container>
    )
})

AppInput.displayName = 'AppInput'
export default AppInput
