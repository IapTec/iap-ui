import * as yup from 'yup'

export const userSchema = yup.object().shape({
    image: yup.string(),
    name: yup.string().required('campo obrigatório'),
    role: yup.number().required('campo obrigatório'),
    email: yup.string().required('campo obrigatório'),
    active: yup.boolean().required('campo obrigatório')
})
