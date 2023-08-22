import * as yup from 'yup'

export const prayerSchema = yup.object().shape({
    category: yup.string().required('Campo obrigatório'),
    authorName: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório')
})
