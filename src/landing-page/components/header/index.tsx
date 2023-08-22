import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSideMenu from '../side-menu'
import { CgScreen } from 'react-icons/cg'
import { FaGripLines } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { FiAlertCircle, FiSmile } from 'react-icons/fi'
import { useWindowSize } from '@/hooks/window-size.hook'
import { scrollTo } from '@/functions/scroll-to.function'
import useScrollPosition from '@/hooks/scroll-position.hook'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import {
    AiFillStar,
    AiOutlineTrophy,
    AiOutlineArrowUp,
    AiOutlineFileUnknown,
    AiOutlineUsergroupAdd
} from 'react-icons/ai'
import { ILandingPageMenuItem } from '../@interfaces/landing-page-menu.interface'

const LPHeader: React.FC = () => {
    const { isMobile } = useWindowSize()
    const isScrollPastPosition = useScrollPosition(50)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const items: ILandingPageMenuItem[] = [
        {
            icon: <AiOutlineArrowUp />,
            title: 'Sobre nós',
            id: LANDING_PAGE_NAVIGATION.about
        },
        {
            icon: <AiFillStar />,
            title: 'Eventos',
            id: LANDING_PAGE_NAVIGATION.event
        },
        {
            title: 'Orações',
            icon: <AiOutlineTrophy />,
            id: LANDING_PAGE_NAVIGATION.prayer
        },
        {
            icon: <BiCodeBlock />,
            title: 'Notícias',
            id: LANDING_PAGE_NAVIGATION.news
        },
        {
            title: 'Parceiros',
            icon: <FiAlertCircle />,
            id: LANDING_PAGE_NAVIGATION.partner
        },
        {
            icon: <FiSmile />,
            title: 'FAQs',
            id: LANDING_PAGE_NAVIGATION.faq
        },
        {
            title: 'Rodapé',
            icon: <AiOutlineFileUnknown />,
            id: LANDING_PAGE_NAVIGATION.footer
        },
        { icon: <></>, isSoon: true, title: 'Entrar', action: () => {} }
    ]

    const toggleSideMenuOpen = () => setShowSideMenu(!showSideMenu)

    const handleClickLogo = () => scrollTo(LANDING_PAGE_NAVIGATION.top)

    const handleClickItem = (item: ILandingPageMenuItem) => {
        if (item.action) item.action()
        else if (item.id) scrollTo(item.id)

        if (showSideMenu) toggleSideMenuOpen()
    }

    const headerStyle: React.CSSProperties = {
        opacity: isScrollPastPosition ? 1 : 0.5,
        backdropFilter: 'blur(5px)'
    }

    return (
        <>
            <Styles.Header style={headerStyle}>
                <Styles.Container>
                    <Styles.Image src={images.Logo} onClick={handleClickLogo} />

                    <Styles.Group>
                        {items.map((item, index) => (
                            <Styles.Link
                                key={index}
                                onClick={() => handleClickItem(item)}
                            >
                                {item.isSoon && (
                                    <Styles.Badge>Em breve</Styles.Badge>
                                )}

                                {item.title}
                            </Styles.Link>
                        ))}
                    </Styles.Group>

                    <Styles.Button onClick={() => toggleSideMenuOpen()}>
                        <FaGripLines />
                    </Styles.Button>
                </Styles.Container>
            </Styles.Header>

            <LPSideMenu
                items={items}
                show={showSideMenu}
                onClose={() => setShowSideMenu(false)}
                onSelect={item => handleClickItem(item)}
            />
        </>
    )
}

export default LPHeader
