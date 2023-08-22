import Styles from './styles'
import images from '@/assets/images'
import React, { useState } from 'react'
import { ISelectItem } from '@/components/@interface/select.interface'
import PartnerCard from '@/landing-page/components/cards/partner-card'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import LPCategoryControl, {
    defaultCategoryControl
} from '@/landing-page/components/category-control'
import PartnerLoopCard from '@/landing-page/components/cards/partner-loop-card'

const LPPartner: React.FC = () => {
    const category: ISelectItem[] = [
        { value: 1, label: `Alimentação` },
        { value: 2, label: `Local do evento` },
        { value: 3, label: `Equipamento` },
        { value: 4, label: `Som` },
        { value: 5, label: `Iluminação` }
    ]

    const [currentCategory, setCurrentCategory] = useState<ISelectItem>(
        defaultCategoryControl
    )

    const highlightPartner = [0, 1, 2, 3, 4, 5]
    const partners = [
        {
            text: 'Lorem iuderrit dolor sit amet, consectet',
            image: images.landingPage.HeroBG,
            onClick: () => {}
        },
        {
            text: 'Lorem iuderrit dolor sit amet, consectet',
            image: images.landingPage.HeroBG,
            onClick: () => {}
        }
    ]

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
                <PartnerLoopCard className="w-2/4" items={highlightPartner} />

                {partners.map((item, index) => (
                    <PartnerCard
                        key={index}
                        text={item.text}
                        className="w-1/4"
                        imageBg={item.image}
                        onClick={() => {}}
                    />
                ))}
            </Styles.Grid>
        </Styles.Container>
    )
}

export default LPPartner
