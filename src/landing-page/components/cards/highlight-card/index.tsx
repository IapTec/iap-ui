import React from 'react'
import Styles from './styles'

interface IHighlightCardProps {
    title: string
    imageBg: string
    description: string
    actionName?: string

    action?: Function
    onClick?: Function
}

const HighlightCard: React.FC<IHighlightCardProps> = props => {
    const { title, imageBg, description, action, onClick, actionName } = props

    const handleClick = () => {
        if (onClick) onClick()
    }

    const handleActionClick = () => {
        if (action) action()
    }

    return (
        <Styles.Container image={imageBg} onClick={handleClick}>
            <Styles.Content>
                <Styles.View>
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Text>{description}</Styles.Text>
                </Styles.View>

                <Styles.Button onClick={handleActionClick}>
                    {actionName}
                </Styles.Button>
            </Styles.Content>
        </Styles.Container>
    )
}

export default HighlightCard
