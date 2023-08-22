import Styles from './styles'
import React from 'react'

interface INewsCardProps {
    title: string
    imageBg: string
    action: Function
    description: string
}
const NewsCard: React.FC<INewsCardProps> = props => {
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

export default NewsCard
