import React from 'react'
import Styles from './styles'
import LPSocialMedia from '@/landing-page/components/social-media'

const HeroSocialProof: React.FC = () => {
    const items = [
        {
            title: `17000+`,
            subtitle: `Seguidores`,
            content: <></>
        },
        {
            title: `4OOO+`,
            subtitle: `Membros`,
            content: <></>
        },
        {
            title: `12+`,
            subtitle: `Patrocinadores`,
            content: <></>
        }
    ]
    return (
        <Styles.Container>
            {items.map((item, index) => (
                <Styles.Card key={index}>
                    <Styles.Title>{item.title}</Styles.Title>
                    <Styles.Subtitle>{item.subtitle}</Styles.Subtitle>
                    {item.content}
                </Styles.Card>
            ))}
        </Styles.Container>
    )
}

export default HeroSocialProof
