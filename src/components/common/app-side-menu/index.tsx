import Styles from './styles'
import Images from '@/assets/images'
import React, { useEffect, useRef } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'

interface IAppSideMenuProps {
    show: boolean
    imageBg?: string
    onClose?: Function
    showLogo?: boolean
    fullContent?: boolean
    children: React.ReactNode
}

const AppSideMenu: React.FC<IAppSideMenuProps> = props => {
    const {
        show,
        imageBg,
        onClose,
        children,
        fullContent,
        showLogo = true
    } = props
    const containerRef = useRef<HTMLElement>(null)

    const animationControl = (
        name: string,
        delay: number,
        callback?: Function
    ) => {
        const animation = `animate__${name}`
        containerRef.current?.classList.add(animation)

        setTimeout(() => {
            containerRef.current?.classList.remove(animation)
            if (callback) callback()
        }, delay)
    }

    const handleClose = () => animationControl('fadeOutRight', 980, onClose)

    useEffect(() => {
        window.onresize = () => {
            handleClose()
        }
    }, [handleClose])

    useEffect(() => {
        if (show) animationControl('fadeInRight', 2100)
        else animationControl('fadeOutRight', 980)
        document.body.style.overflow = show ? 'hidden' : 'auto'
    }, [show])

    useEffect(() => {
        return () => {
            animationControl('fadeOutRight', 980)
        }
    }, [])

    if (!show) return <></>

    return (
        <Styles.Container
            imageBg={imageBg}
            ref={containerRef}
            className="animate__animated"
        >
            <Styles.Header>
                {!!onClose && (
                    <Styles.Button onClick={handleClose}>
                        <BsArrowLeftCircle />
                    </Styles.Button>
                )}

                {showLogo && (
                    <Styles.Figure>
                        <Styles.Image src={Images.Logo} />
                    </Styles.Figure>
                )}
            </Styles.Header>

            <Styles.Content fullContent={fullContent}>
                {children}
            </Styles.Content>
        </Styles.Container>
    )
}

export default AppSideMenu
