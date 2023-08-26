import Styles from './styles'
import images from '@/assets/images'
import React, { useState } from 'react'
import NewsCard from '@/landing-page/components/cards/news-card'
import { ISelectItem } from '@/components/@interface/select.interface'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import LPCategoryControl, {
    defaultCategoryControl
} from '@/landing-page/components/category-control'
import HighlightCard from '@/landing-page/components/cards/highlight-card'

const LPNews: React.FC = () => {
    const category: ISelectItem[] = [
        { value: 1, label: `Eventos` },
        { value: 2, label: `Entretenimento` },
        { value: 3, label: `Esporte` },
        { value: 4, label: `Cidade` },
        { value: 5, label: `Trabalho` }
    ]

    const currentNews = {
        title: `Noticia`,
        banner: images.landingPage.HeroBG,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
    }

    const events = [currentNews, currentNews, currentNews, currentNews]

    const [currentCategory, setCurrentCategory] = useState<ISelectItem>(
        defaultCategoryControl
    )

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.news}>
            <Styles.Title>Noticias</Styles.Title>
            <Styles.Subtitle>
                Fique por dentro das principais noticias da região
            </Styles.Subtitle>

            <LPCategoryControl
                items={category}
                className="mb-12"
                selected={currentCategory}
                onSelect={item => setCurrentCategory(item)}
            />

            <Styles.Subtitle>
                - Em breve você estará por dentro de todas as notícias da região
                -
            </Styles.Subtitle>

            {/* <HighlightCard
                title={currentNews.title}
                actionName="Ver detalhe"
                imageBg={currentNews.banner}
                description={currentNews.description}
                action={() => {}}
                onClick={() => {}}
            />

            <Styles.Grid>
                {events.map((item, index) => (
                    <NewsCard
                        key={index}
                        title={item.title}
                        imageBg={item.banner}
                        description={item.description}
                        action={() => {}}
                    />
                ))}
            </Styles.Grid> */}
        </Styles.Container>
    )
}

export default LPNews
