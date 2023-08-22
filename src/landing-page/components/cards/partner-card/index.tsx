import React from 'react'
import Styles from './styles'

interface IPartnerCardProps {
    text: string
    imageBg: string
    onClick: Function
    className?: string
}
const PartnerCard: React.FC<IPartnerCardProps> = props => {
    const { imageBg, text, onClick, className } = props

    return (
        <Styles.Container className={className} image={imageBg}>
            <Styles.Content>
                <Styles.Text>{text}</Styles.Text>
                <Styles.Button onClick={() => onClick()}>
                    Saiba mais
                </Styles.Button>
            </Styles.Content>
        </Styles.Container>
    )
}

export default PartnerCard
