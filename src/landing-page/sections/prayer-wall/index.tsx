import Styles from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '@/hooks/window-size.hook'
import { FreeMode, Scrollbar, Mousewheel } from 'swiper'
import React, { useEffect, useRef, useState } from 'react'
import { PrayerService } from '@/firebase/services/prayer.service'
import PrayerCard from '@/landing-page/components/cards/prayer-card'
import { ISelectItem } from '@/components/@interface/select.interface'
import ModalPrayer from '@/landing-page/components/modals/modal-prayer'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { PRAYER_CATEGORY_ITEMS } from '@/contants/prayer-category.constant'
import { IPrayerWallResponse } from '@/interfaces/prayer/prayer-wall.interface'
import LPCategoryControl, {
    defaultCategoryControl
} from '@/landing-page/components/category-control'

const prayerService = new PrayerService()

const LPPrayerWall: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [requests, setRequests] = useState<IPrayerWallResponse[]>([])

    const swiperRef = useRef<any>(null)
    const { isMobile } = useWindowSize()
    const slidesPerView = isMobile ? 1 : 4
    const category: ISelectItem[] = PRAYER_CATEGORY_ITEMS

    const handleCloseModal = () => setIsOpen(false)

    const [currentCategory, setCurrentCategory] = useState<ISelectItem>(
        defaultCategoryControl
    )

    const filtereditems = requests.filter(({ category, active }) => {
        const filterByCategory =
            currentCategory.value === defaultCategoryControl.value
                ? true
                : category.id == currentCategory.value

        return filterByCategory && active
    })

    const getReason = (item: IPrayerWallResponse) => {
        const category = PRAYER_CATEGORY_ITEMS.find(
            ({ value }) => value == item.category.id
        )
        return category?.label || ''
    }

    const getPrayerWall = async () => {
        try {
            const response = await prayerService.getAll()
            setRequests(response)
        } catch (error) {
            console.error('[prayer wall] :', error)
        }
    }

    useEffect(() => {
        getPrayerWall()
    }, [])

    return (
        <>
            <Styles.Container id={LANDING_PAGE_NAVIGATION.prayer}>
                <Styles.Title>Mural de orações</Styles.Title>

                <Styles.Subtitle>
                    Aqui você deposita as suas orações e ajuda também em oração
                    os seus irmãos.
                </Styles.Subtitle>

                <Styles.Button onClick={() => setIsOpen(true)}>
                    Fazer pedido de oração
                </Styles.Button>

                <LPCategoryControl
                    items={category}
                    selected={currentCategory}
                    onSelect={item => setCurrentCategory(item)}
                />

                {!filtereditems.length && (
                    <Styles.Subtitle className="mt-8">
                        - sem resultados -
                    </Styles.Subtitle>
                )}

                <Swiper
                    loop={false}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    spaceBetween={12}
                    className="my-12"
                    slidesPerView={slidesPerView}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    onSwiper={swiper => (swiperRef.current = swiper)}
                >
                    {filtereditems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PrayerCard
                                title={getReason(item)}
                                text={item.description}
                                authorName={item.authorName}
                                date={item.creationDate.toDate()}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Styles.Container>

            <ModalPrayer
                isOpen={isOpen}
                onClose={handleCloseModal}
                onBackdropClick={handleCloseModal}
            />
        </>
    )
}

export default LPPrayerWall
