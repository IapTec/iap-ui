import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import EventCard from '@/landing-page/components/cards/event-card'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import HighlightCard from '@/landing-page/components/cards/highlight-card'

const LPEvent: React.FC = () => {
    const currentEvent = {
        title: `Vigilia`,
        banner: images.landingPage.HeroBG,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
    }
    const events = [currentEvent, currentEvent, currentEvent, currentEvent]

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.event}>
            <Styles.Title>Eventos</Styles.Title>
            <Styles.Subtitle>
                Saiba sobre tudo que está por vir nos nossos eventos aqui!
            </Styles.Subtitle>

            <HighlightCard
                title={currentEvent.title}
                actionName="Marcar presença"
                imageBg={currentEvent.banner}
                description={currentEvent.description}
                action={() => {}}
                onClick={() => {}}
            />

            <Styles.Grid>
                {events.map((item, index) => (
                    <EventCard
                        key={index}
                        title={item.title}
                        imageBg={item.banner}
                        description={item.description}
                        action={() => {}}
                    />
                ))}
            </Styles.Grid>
        </Styles.Container>
    )
}

export default LPEvent
