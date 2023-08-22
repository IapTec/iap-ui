import { useEffect, useState } from 'react'

const useScrollPosition = (position: number): boolean => {
    const [isPastPosition, setIsPastPosition] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            setIsPastPosition(scrollY > position)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [position])

    return isPastPosition
}

export default useScrollPosition
