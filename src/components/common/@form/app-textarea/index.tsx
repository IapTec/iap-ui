import Styles from './styles'
import { FieldError, UseFormRegister } from 'react-hook-form'
import React, { forwardRef, TextareaHTMLAttributes } from 'react'

export interface AppTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    label?: string
    resize?: boolean
    error?: FieldError
    className?: string
    register?: UseFormRegister<any>
}

const AppTextarea: React.FC<AppTextareaProps> = forwardRef<
    HTMLTextAreaElement,
    AppTextareaProps
>((props, ref) => {
    const { id, error, label, resize, register, className, ...rest } = props

    const registerValue = register ? register : () => {}
    const enabeleResize = resize === undefined ? true : resize

    return (
        <Styles.Container className={className || ''}>
            <Styles.Label>{label || ''}</Styles.Label>
            <Styles.Textarea
                id={id}
                {...rest}
                ref={ref}
                name={id}
                {...registerValue(id)}
                resize={enabeleResize}
            />
            <Styles.Span>{error?.message}</Styles.Span>
        </Styles.Container>
    )
})

AppTextarea.displayName = 'AppTextarea'
export default AppTextarea
