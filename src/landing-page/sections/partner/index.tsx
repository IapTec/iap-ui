import Styles from './styles'
import React, { useEffect, useState } from 'react'
import { PartnerHelper } from '@/helper/partner.helper'
import { PartnerService } from '@/firebase/services/partner.service'
import { ISelectItem } from '@/components/@interface/select.interface'
import PartnerCard from '@/landing-page/components/cards/partner-card'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { IPartnerResponse } from '@/interfaces/partner/partner.interface'
import { PARTNER_CATEGORY_ITEMS } from '@/contants/partner-category.contant'
import PartnerLoopCard from '@/landing-page/components/cards/partner-loop-card'
import { PartnerAdvertingService } from '@/firebase/services/partner-adverting.service'
import LPCategoryControl, {
    defaultCategoryControl
} from '@/landing-page/components/category-control'
import { IPartnerLoopCardItem } from '@/landing-page/components/@interfaces/partner-loop-card.interface'

const partnerHelper = new PartnerHelper()
const partnerService = new PartnerService()
const partnerAdvertingService = new PartnerAdvertingService()

const LPPartner: React.FC = () => {
    const category: ISelectItem[] = PARTNER_CATEGORY_ITEMS

    const [partners, setPartners] = useState<IPartnerResponse[]>([])
    const [currentCategory, setCurrentCategory] = useState<ISelectItem>(
        defaultCategoryControl
    )

    const [highlightPartner, setHighlightPartner] = useState<
        IPartnerLoopCardItem[]
    >([])

    const getPartners = async () => {
        try {
            const response = await partnerService.getAll()
            const [first, second] = response
            setPartners([first, second])
        } catch (error) {
            console.error('[Partners] :', error)
        }
    }

    const getPartnersAdverting = async () => {
        try {
            const response = await partnerAdvertingService.getAll()
            const data: IPartnerLoopCardItem[] = response.map(item => ({
                name: item.title,
                image: item.banner,
                portfolioUrl: item.url,
                description: item.description
            }))

            getPartners()
            setHighlightPartner(data)
        } catch (error) {
            console.error('[Partners] :', error)
        }
    }

    useEffect(() => {
        getPartnersAdverting()
    }, [])

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.partner}>
            <Styles.Title>Patrocinadores</Styles.Title>
            <Styles.Subtitle>
                Contamos com os melhores parceiros para proporcionar uma melhor
                experiência pra você!
            </Styles.Subtitle>

            <LPCategoryControl
                items={category}
                className="mb-12"
                selected={currentCategory}
                onSelect={item => setCurrentCategory(item)}
            />

            <Styles.Grid>
                <PartnerLoopCard
                    className="w-2/4 sm:w-full"
                    items={highlightPartner}
                />

                <Styles.CardContainer>
                    {partners.map((item, index) => {
                        if (item)
                            return (
                                <>
                                    <PartnerCard
                                        key={index}
                                        text={item.name}
                                        imageBg={item.imageUrl}
                                        onClick={() => {}}
                                    />
                                </>
                            )
                        else
                            return (
                                <Styles.Card key={index}>
                                    <Styles.Button>
                                        Seja um patrocinador
                                    </Styles.Button>
                                </Styles.Card>
                            )
                    })}
                </Styles.CardContainer>
            </Styles.Grid>
        </Styles.Container>
    )
}

export default LPPartner
