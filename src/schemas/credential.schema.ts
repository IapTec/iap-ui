import * as yup from 'yup'

export const credentialSchema = yup.object().shape({
    email: yup.string().required('Insira seu email'),
    password: yup.string().required('Insira uma mensagem')
})
