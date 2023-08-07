import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import { BiLogOutCircle } from 'react-icons/bi'
import { MdAutoGraph, MdEventNote } from 'react-icons/md'
import { IAuthState } from '@/store/@interfaces/auth.interface'
import { FaPrayingHands, FaRegNewspaper, FaUsers } from 'react-icons/fa'

const AdminSideMenu: React.FC = () => {
    const router = useRouter()
    const { user } = useMapState<IAuthState>('auth')

    const goTo = (route: string) => router.push(route)

    const items = [
        {
            title: `Eventos`,
            icon: <MdEventNote />,
            action: () => goTo('/admin/event')
        },
        {
            title: `Notícias`,
            icon: <FaRegNewspaper />,
            action: () => goTo('/admin/news')
        },
        {
            title: `Patrocinadores`,
            icon: <MdAutoGraph />,
            action: () => goTo('/admin/partner')
        },
        {
            title: `Usuários`,
            icon: <FaUsers />,
            action: () => goTo('/admin/user')
        },
        {
            title: `Mural de oração`,
            icon: <FaPrayingHands />,
            action: () => goTo('/admin/prayer-wall')
        }
    ]

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <Styles.ButtonIcon title="Sair">
                    <BiLogOutCircle />
                </Styles.ButtonIcon>

                <Styles.UserContainer>
                    <Styles.Image src={images.AvatarDefault} />
                    <Styles.Title>{user.name}</Styles.Title>
                </Styles.UserContainer>

                <Styles.Separator />

                <Styles.ItemsGroup>
                    {items.map((item, index) => (
                        <Styles.Item key={index} onClick={item.action}>
                            <Styles.Icon>{item.icon}</Styles.Icon>
                            <Styles.Text>{item.title}</Styles.Text>
                        </Styles.Item>
                    ))}
                </Styles.ItemsGroup>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default AdminSideMenu
