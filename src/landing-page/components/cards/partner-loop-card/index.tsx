import Styles from './styles'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

interface IPartnerLoopCardProps {
    items: any[]
    className?: string
}
const PartnerLoopCard: React.FC<IPartnerLoopCardProps> = props => {
    const { items, className } = props
    const swiperRef = useRef<any>(null)
    const progressCircle = useRef<any>(null)
    const progressContent = useRef<any>(null)

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (!progressCircle.current) return
        progressCircle.current.style.setProperty('--progress', 1 - progress)
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
    return (
        <Styles.Container className={className}>
            <Swiper
                centeredSlides={true}
                autoplay={{ delay: 4000 }}
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                onSwiper={swiper => (swiperRef.current = swiper)}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div>{index}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Styles.Container>
    )
}

export default PartnerLoopCard
