import Styles from './styles'
import React, { useRef } from 'react'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IPartnerLoopCardItem } from '../../@interfaces/partner-loop-card.interface'

interface IPartnerLoopCardProps {
    items: IPartnerLoopCardItem[]
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

    const handleClick = (url: string) => window.open(url, '_blank')

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
                        <Styles.Card image={item.image}>
                            <Styles.Footer>
                                <Styles.View>
                                    <Styles.Title>{item.name}</Styles.Title>
                                    <Styles.Text>
                                        {item.description}
                                    </Styles.Text>
                                </Styles.View>

                                <Styles.Button
                                    onClick={() =>
                                        handleClick(item.portfolioUrl)
                                    }
                                >
                                    Saiba mais
                                </Styles.Button>
                            </Styles.Footer>
                        </Styles.Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Styles.Container>
    )
}

export default PartnerLoopCard
