import Styles from './styles'
import React from 'react'

interface IEventCardProps {
    title: string
    imageBg: string
    action: Function
    description: string
}
const EventCard: React.FC<IEventCardProps> = props => {
    const { title, imageBg, description, action } = props

    const handleButtonClick = () => {
        if (action) action()
    }

    return (
        <Styles.Container>
            <Styles.Figure image={imageBg} />

            <Styles.Title>{title}</Styles.Title>
            <Styles.Text>{description}</Styles.Text>
            <Styles.Button onClick={handleButtonClick}>Ver mais</Styles.Button>
        </Styles.Container>
    )
}

export default EventCard
