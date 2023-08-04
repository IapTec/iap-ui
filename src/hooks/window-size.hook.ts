import { BREAKPOINTS } from '@/contants/breakpoints.constant'
import { useEffect, useState } from 'react'

export interface IWindowSize {
    width: number
    height: number
    isMobile: boolean
}

export const useWindowSize = (): IWindowSize => {
    const [windowSize, setWindowSize] = useState<IWindowSize>({
        width: 0,
        height: 0,
        isMobile: false
    })

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth <= BREAKPOINTS.sm
        })
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}
