import React from 'react'
import Styles from './styles'
import { SOCIAL_MEDIA } from '@/contants/social-media.constant'

interface ILPSocialMediaProps {
    className?: string
    direction?: 'row' | 'column'
}

const LPSocialMedia: React.FC<ILPSocialMediaProps> = props => {
    const { className, direction = 'row' } = props

    const containerStyles: React.CSSProperties = {
        flexDirection: direction
    }

    const handleClick = (url: string) => window.open(url, '_blank')

    return (
        <Styles.Container className={className} style={containerStyles}>
            {SOCIAL_MEDIA.map((item, index) => (
                <Styles.Icon
                    key={index}
                    title={item.title}
                    onClick={() => handleClick(item.link)}
                >
                    {item.icon}
                </Styles.Icon>
            ))}
        </Styles.Container>
    )
}

export default LPSocialMedia
