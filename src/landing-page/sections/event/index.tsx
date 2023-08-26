import Styles from './styles'
import React, { useEffect, useState } from 'react'
import { differenceInMilliseconds } from 'date-fns'
import { EventService } from '@/firebase/services/event.service'
import EventCard from '@/landing-page/components/cards/event-card'
import { IEventResponse } from '@/interfaces/event/event.interface'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import HighlightCard from '@/landing-page/components/cards/highlight-card'

const eventService = new EventService()

const LPEvent: React.FC = () => {
    const [events, setEvents] = useState<IEventResponse[]>([])
    const [nextEvent, setNextEvent] = useState<IEventResponse>(
        {} as IEventResponse
    )

    const getNextEvent = (items: IEventResponse[]) => {
        const currentDate = new Date()

        return items.reduce((closest, current) => {
            const closestDiff = differenceInMilliseconds(
                closest.creationDate.toDate(),
                currentDate
            )

            const currentDiff = differenceInMilliseconds(
                current.creationDate.toDate(),
                currentDate
            )

            return currentDiff < closestDiff ? current : closest
        }, items[0])
    }

    const getEvents = async () => {
        try {
            const response = await eventService.getAll()

            const nextEvent = getNextEvent(response)
            const otherEvents = response.filter(({ id }) => id !== nextEvent.id)

            setEvents(otherEvents)
            setNextEvent(nextEvent)
        } catch (error) {
            console.error('[events] :', error)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.event}>
            <Styles.Title>Eventos</Styles.Title>
            <Styles.Subtitle>
                Saiba sobre tudo que está por vir nos nossos eventos aqui!
            </Styles.Subtitle>

            <HighlightCard
                title={nextEvent.title}
                imageBg={nextEvent.banner}
                actionName="Marcar presença"
                description={nextEvent.contentHTML}
                knowMoreAction={() => {}}
                onClick={() => {}}
            />

            <Styles.Grid>
                {events.map((item, index) => (
                    <EventCard
                        key={index}
                        title={item.title}
                        imageBg={item.banner}
                        description={item.contentHTML}
                        action={() => {}}
                    />
                ))}
            </Styles.Grid>
        </Styles.Container>
    )
}

export default LPEvent
