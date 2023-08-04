import React from 'react'
import Styles from './styles'
import { useForm } from 'react-hook-form'
import AppInput from '../common/@form/app-input'
import AppRadio from '../common/@form/app-radio'
import AppSelect from '../common/@form/app-select'
import { yupResolver } from '@hookform/resolvers/yup'
import AppCheckbox from '../common/@form/app-checkbox'
import AppTextarea from '../common/@form/app-textarea'
import AppInputPassword from '../common/@form/app-input-password'

// #region: schema
import * as yup from 'yup'

export const exempleFormSchema = yup.object().shape({
    input: yup.string().required('Insira um valor para o campo do tipo input'),
    radio: yup.string().required('Insira um valor para o campo do tipo radio'),
    select: yup
        .string()
        .required('Insira um valor para o campo do tipo select'),
    checkbox: yup
        .string()
        .required('Insira um valor para o campo do tipo checkbox'),
    password: yup
        .string()
        .required('Insira um valor para o campo do tipo password'),
    textarea: yup
        .string()
        .required('Insira um valor para o campo do tipo textarea')
})
// #endregion: schema

// #region: interface
interface IExempleForm {
    input: string
    radio: string
    select: string
    checkbox: string
    password: string
    textarea: string
}
// #endregion: interface

const ExempleForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IExempleForm>({
        mode: 'onChange',
        resolver: yupResolver(exempleFormSchema)
    })

    const onSubmit = handleSubmit((model: IExempleForm) => {
        console.log('MODEL :', model)
    })

    return (
        <Styles.Form onSubmit={onSubmit}>
            <AppInput
                id="input"
                label="Input"
                register={register}
                error={errors.input}
            />
            <AppCheckbox
                id="checkbox"
                label="Checkbox"
                register={register}
                error={errors.checkbox}
            />
            <AppTextarea
                id="textarea"
                resize={false}
                label="Textarea"
                register={register}
                error={errors.textarea}
            />
            <AppInputPassword
                id="password"
                label="Password"
                register={register}
                error={errors.password}
            />
            <AppRadio
                id="radio"
                label="Radio"
                register={register}
                error={errors.radio}
                data={[
                    { label: 'Option I', value: 'Option I' },
                    { label: 'Option II', value: 'Option II' }
                ]}
            />
            <AppSelect
                id="select"
                label="Select"
                register={register}
                error={errors.select}
                data={[
                    { label: 'Option I', value: 'Option I' },
                    { label: 'Option II', value: 'Option II' }
                ]}
            />

            <Styles.Button type="submit" disabled={!isValid}>
                Submit
                {isValid}
            </Styles.Button>
        </Styles.Form>
    )
}

export default ExempleForm
