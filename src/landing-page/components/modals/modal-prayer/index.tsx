import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import { setLoading } from '@/hooks'
import { FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import AppModal from '@/components/common/app-modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { prayerSchema } from '@/schemas/prayer.schema'
import AppInput from '@/components/common/@form/app-input'
import AppSelect from '@/components/common/@form/app-select'
import { AlertService } from '@/services/common/alert.service'
import AppTextarea from '@/components/common/@form/app-textarea'
import { PrayerService } from '@/firebase/services/prayer.service'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'
import { PRAYER_CATEGORY_ITEMS } from '@/contants/prayer-category.constant'
import { IRegisterPrayerWallForm } from '@/interfaces/prayer/prayer-wall.interface'

const alertService = new AlertService()
const prayerService = new PrayerService()

interface IModalPrayerProps extends AppModalInterface {}

const ModalPrayer: React.FC<IModalPrayerProps> = props => {
    const { isOpen, onClose, onBackdropClick } = props

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IRegisterPrayerWallForm>({
        mode: 'onChange',
        resolver: yupResolver(prayerSchema)
    })

    const onSubmit = handleSubmit(async (model: IRegisterPrayerWallForm) => {
        try {
            setLoading(true, 'Enviando o seu pedido de oração...')
            await prayerService.create({ ...model, active: false } as any)
            handleClose()
            reset()
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o contato')
        } finally {
            setLoading(false)
        }
    })

    const handleClose = () => {
        if (onClose) onClose()
    }

    return (
        <AppModal
            width="46vw"
            isOpen={isOpen}
            onClose={onClose}
            maxHeight="98vh"
            containerStyle={{ padding: 10 }}
            onBackdropClick={onBackdropClick}
            backdropStyle={{
                paddingTop: 14
            }}
        >
            <Styles.Form onSubmit={onSubmit}>
                <Styles.Image src={images.Logo} />

                <Styles.Title>
                    Deposite aqui o seu pedido de oração
                </Styles.Title>

                <Styles.Subtitle>
                    Além de fortalecer a estrutura do nosso projeto você tem o
                    seu trabalho valorizado e divulgado nos nossos eventos e em
                    nossa página.
                </Styles.Subtitle>

                <AppInput
                    id="authorName"
                    icon={<FiUser />}
                    register={register}
                    error={errors.authorName}
                    placeholder="Qual o seu nome?"
                />

                <AppSelect
                    id="category"
                    register={register}
                    error={errors.category}
                    data={PRAYER_CATEGORY_ITEMS}
                    defaultLabel="Qual o motivo da sua oração?"
                />

                <Styles.Title>Escreva aqui o seu pedido:</Styles.Title>

                <AppTextarea
                    resize={false}
                    id="description"
                    register={register}
                    error={errors.description}
                    placeholder="Escreva em poucas palavras o que você está passando nesse momento."
                />

                <Styles.Button>Enviar</Styles.Button>
            </Styles.Form>
        </AppModal>
    )
}

export default ModalPrayer
