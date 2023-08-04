import { setLoading } from '@/hooks'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineMail } from 'react-icons/md'
import AppHead from '@/components/common/app-head'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '@/contexts/auth.context'
import AppInput from '@/components/common/@form/app-input'
import AuthenticationLayout from '@/layouts/authentication'
import { credentialSchema } from '@/schemas/credential.schema'
import { AlertService } from '@/services/common/alert.service'
import Styles from '@/styles/pages/authentication/common.styles'
import { ICredential } from '@/interfaces/authentication.interface'
import AppInputPassword from '@/components/common/@form/app-input-password'

const alertService = new AlertService()

const Login: React.FC = () => {
    const router = useRouter()
    const { login } = useContext(AuthContext)
    const goTo = (url: string) => router.push(url)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<ICredential>({
        mode: 'onChange',
        resolver: yupResolver(credentialSchema)
    })

    const onSubmit = handleSubmit(async (model: ICredential) => {
        try {
            setLoading(true)
            await login(model)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alertService.error('')
        }
    })

    return (
        <>
            <AppHead title="Login" />

            <AuthenticationLayout
                title="Login"
                text="Insira as suas credenciais de acesso"
            >
                <Styles.Form onSubmit={onSubmit}>
                    <AppInput
                        id="email"
                        type="email"
                        label="Email"
                        register={register}
                        error={errors.email}
                        icon={<MdOutlineMail />}
                        placeholder="Insira seu e-mail"
                    />

                    <AppInputPassword
                        id="password"
                        label="Senha"
                        register={register}
                        error={errors.password}
                        placeholder="Insira sua senha"
                        icon={<HiOutlineLockClosed />}
                    />

                    <Styles.Link onClick={() => goTo('password-recovery')}>
                        Esqueci a senha
                    </Styles.Link>

                    <Styles.Button disabled={!isValid}>Entrar</Styles.Button>
                </Styles.Form>
            </AuthenticationLayout>
        </>
    )
}

export default Login
