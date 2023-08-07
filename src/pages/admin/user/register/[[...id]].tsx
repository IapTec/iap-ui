import { setLoading } from '@/hooks'
import theme from '@/styles/ts/theme'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Styles from '@/styles/pages/common'
import AppHead from '@/components/common/app-head'
import React, { useEffect, useState } from 'react'
import { userSchema } from '@/schemas/user.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUserForm } from '@/interfaces/user.interface'
import AppInput from '@/components/common/@form/app-input'
import AppSelect from '@/components/common/@form/app-select'
import { UserService } from '@/firebase/services/user.service'
import { AlertService } from '@/services/common/alert.service'
import AppCheckbox from '@/components/common/@form/app-checkbox'
import { USER_ROLE_OPTIONS } from '@/contants/user-role.contant'

const userService = new UserService()
const alertService = new AlertService()

const AdminUserRegister: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const [userId, setUserId] = useState('')
    const [user, setUser] = useState<IUserForm>({} as IUserForm)

    const isNew = !userId
    const title = isNew ? `Editar usuário` : `Criar usuário`

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IUserForm>({
        mode: 'onChange',
        resolver: yupResolver(userSchema)
    })

    const back = () => router.push('/admin/user')

    const getUser = async (id: string) => {
        try {
            setUserId(id)
            setLoading(true)
            const data = await userService.getById(id)
            const user: IUserForm = { ...data, role: data.role.id }

            setValue('name', user.name)
            setValue('role', user.role)
            setValue('email', user.email)
            setValue('active', user.active)

            setUser(user)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alertService.error('')
        }
    }

    const onSubmit = handleSubmit(async (model: IUserForm) => {
        try {
            setLoading(true)

            const data = model as any
            if (isNew) await userService.create(data)
            else await userService.update(data, String(userId))
            back()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alertService.error('')
        }
    })

    useEffect(() => {
        if (id) getUser(String(id))
    }, [router.query])

    return (
        <>
            <AppHead title="Usuário" />

            <Styles.Container>
                <Styles.PageNav>
                    <Styles.PageTitle>{title}</Styles.PageTitle>
                    <Styles.Button
                        onClick={back}
                        style={{ background: theme.colors.secondary }}
                    >
                        Voltar
                    </Styles.Button>

                    <Styles.Button
                        type="submit"
                        onClick={onSubmit}
                        disabled={!isValid}
                    >
                        Salvar
                    </Styles.Button>
                </Styles.PageNav>

                <Styles.InlineForm.Form onSubmit={onSubmit}>
                    <AppInput
                        id="name"
                        label="Nome"
                        placeholder="Nome"
                        register={register}
                        error={errors.name}
                    />

                    <AppInput
                        id="email"
                        label="Email"
                        placeholder="Email"
                        register={register}
                        error={errors.email}
                    />

                    <AppSelect
                        id="role"
                        label="Permissão"
                        register={register}
                        error={errors.role}
                        data={USER_ROLE_OPTIONS}
                    />

                    <Styles.View>
                        <AppCheckbox
                            id="active"
                            register={register}
                            error={errors.active}
                            label="Usuário ativo?"
                        />
                    </Styles.View>
                </Styles.InlineForm.Form>
            </Styles.Container>
        </>
    )
}

export default AdminUserRegister
