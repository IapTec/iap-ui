import Styles from './styles'
import React, {
    Ref,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react'
import { useWindowSize } from '@/hooks/window-size.hook'
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export interface IAppAccordionRef {
    open: () => void
    close: () => void
}
interface IAppAccordionProps {
    children: React.ReactNode
    enableMobileStyle?: boolean
    title: string | React.ReactNode
    onOpen?: Function
}
const AppAccordion = forwardRef(
    (props: IAppAccordionProps, ref: Ref<IAppAccordionRef>) => {
        const { title, children, onOpen, enableMobileStyle = false } = props

        const [parent] = useAutoAnimate()
        const { isMobile } = useWindowSize()
        const [isOpen, setIsOpen] = useState(false)

        useImperativeHandle(ref, () => ({ open, close }))

        const toggleIsOpen = () => {
            setIsOpen(!isOpen)
            if (!isOpen && onOpen) onOpen()
        }

        const open = () => setIsOpen(true)
        const close = () => setIsOpen(false)

        return (
            <Styles.Container
                ref={parent}
                isOpen={isOpen}
                enableMobileStyle={enableMobileStyle && isMobile}
            >
                <Styles.Header>
                    <Styles.Title onClick={toggleIsOpen}>{title}</Styles.Title>
                    <Styles.Button onClick={toggleIsOpen}>
                        {isOpen ? <BiMinusCircle /> : <BiPlusCircle />}
                    </Styles.Button>
                </Styles.Header>

                {isOpen && <Styles.Content>{children}</Styles.Content>}
            </Styles.Container>
        )
    }
)

AppAccordion.displayName = 'AppAccordion'
export default AppAccordion

export function useAppAccordionRef() {
    const ref = useRef<IAppAccordionRef>(null)
    return ref
}
