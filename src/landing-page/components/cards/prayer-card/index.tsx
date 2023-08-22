import React from 'react'
import Styles from './styles'
import { format } from 'date-fns'

interface IPrayerCard {
    date: Date
    text: string
    title: string
    authorName: string
}

const PrayerCard: React.FC<IPrayerCard> = props => {
    const { date, text, title, authorName } = props

    return (
        <Styles.Card>
            <Styles.Title>Pedido de oração: {title}</Styles.Title>
            <Styles.Text>{text}</Styles.Text>

            <Styles.Footer>
                <Styles.Figure>{authorName.split('')[0]}</Styles.Figure>
                <Styles.View>
                    <Styles.AuthorName>{authorName}</Styles.AuthorName>
                    <Styles.Small>{format(date, 'dd/MM/yyyy')}</Styles.Small>
                </Styles.View>
            </Styles.Footer>
        </Styles.Card>
    )
}

export default PrayerCard
