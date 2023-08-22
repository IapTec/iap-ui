import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import HeroSocialProof from './hero-social-proof'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPHero: React.FC = () => {
    return (
        <>
            <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.about}>
                <Styles.Container>
                    <Styles.Content>
                        <Styles.View>
                            <Styles.Title>Instituto Apocalipse</Styles.Title>
                            <Styles.Text>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Styles.Text>
                        </Styles.View>

                        <Styles.Image src={images.Logo} />
                    </Styles.Content>
                </Styles.Container>
            </Styles.ContainerWrapper>

            <HeroSocialProof />
        </>
    )
}

export default LPHero
