import enviroments from '@/config/enviroments'
import axios, { AxiosRequestHeaders } from 'axios'

const axiosFactory = (url: string = '', headers?: AxiosRequestHeaders) =>
    axios.create({
        baseURL: url,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
            ...headers
        }
    })

export const httpClient = axiosFactory(enviroments.apiUrl)

httpClient.interceptors.request.use(config => {
    config.headers = config.headers ?? {}
    return config
})
