import React from 'react'
import Styles from './styles'
import { BsChevronRight } from 'react-icons/bs'

interface IHighlightCardProps {
    title: string
    imageBg: string
    description: string
    actionName?: string

    action?: Function
    onClick?: Function
    knowMoreAction?: Function
}

const HighlightCard: React.FC<IHighlightCardProps> = props => {
    const {
        title,
        imageBg,
        description,
        action,
        onClick,
        knowMoreAction,
        actionName
    } = props

    const handleClick = () => {
        if (onClick) onClick()
    }

    const handleActionClick = () => {
        if (action) action()
    }

    const handleKnowMoreActionClick = () => {
        if (knowMoreAction) knowMoreAction()
    }

    return (
        <Styles.Container
            image={imageBg}
            onClick={handleClick}
            className={onClick ? 'cursor-pointer' : ''}
        >
            <Styles.Content>
                <Styles.View>
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Text>{description}</Styles.Text>
                </Styles.View>

                {action && (
                    <Styles.Button onClick={handleActionClick}>
                        {actionName}
                    </Styles.Button>
                )}

                {knowMoreAction && (
                    <Styles.ButtonKnowMore onClick={handleKnowMoreActionClick}>
                        <BsChevronRight />
                    </Styles.ButtonKnowMore>
                )}
            </Styles.Content>
        </Styles.Container>
    )
}

export default HighlightCard
