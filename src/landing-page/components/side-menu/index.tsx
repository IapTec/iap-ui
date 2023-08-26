import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSocialMedia from '../social-media'
import { FaArrowLeft } from 'react-icons/fa'
import AppSideMenu from '@/components/common/app-side-menu'
import { ILandingPageMenuItem } from '../@interfaces/landing-page-menu.interface'

interface ISideMenuProps {
    show: boolean
    onClose: Function
    items: ILandingPageMenuItem[]
    onSelect: (item: ILandingPageMenuItem) => void
}

const LPSideMenu: React.FC<ISideMenuProps> = props => {
    const { show, items, onClose, onSelect } = props

    return (
        <AppSideMenu show={show} fullContent showLogo={false}>
            <Styles.Container>
                <Styles.Header>
                    <Styles.HeaderImage src={images.LogoHorizontalWhite} />
                    <Styles.HeaderButton onClick={() => onClose()}>
                        <FaArrowLeft />
                    </Styles.HeaderButton>
                </Styles.Header>

                <Styles.Title>Menu</Styles.Title>

                <Styles.Group>
                    {items
                        .filter(({ isSoon }) => !isSoon)
                        .map((item, index) => (
                            <Styles.Item
                                key={index}
                                onClick={() => onSelect(item)}
                            >
                                {item.title}
                            </Styles.Item>
                        ))}
                </Styles.Group>

                <LPSocialMedia />
            </Styles.Container>
        </AppSideMenu>
    )
}

export default LPSideMenu
