import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import HeroSocialProof from './hero-social-proof'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import LPSocialMedia from '@/landing-page/components/social-media'

const LPHero: React.FC = () => {
    return (
        <>
            <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.about}>
                <Styles.Container>
                    <Styles.Content>
                        <Styles.View>
                            <Styles.Title>Instituto Apocalipse</Styles.Title>
                            <Styles.Text>
                                O Instituto Apocalipse teve início no ano de
                                2012, seu principal objetivo é promover
                                iniciativas de participação solidária coltada
                                para a superação da pobreza e da inclusão
                                social, promovendo ações para desenvolvimento
                                social de grupo mais vulneráveis da população.
                            </Styles.Text>

                            <Styles.Text className="mt-4">
                                Temos o apoio de parceiros em toda a região do
                                Alto Tietê, os quais também contribuem no
                                evangelismo e no campo espiritual daqueles que
                                buscam a Deus.
                            </Styles.Text>

                            <Styles.SocialMediaContainer>
                                <Styles.Text className="mb-4">
                                    Acompanhe também em nossas redes sociais
                                </Styles.Text>
                                <LPSocialMedia />
                            </Styles.SocialMediaContainer>
                        </Styles.View>

                        <Styles.Image src={images.LogoWhite} />
                    </Styles.Content>
                </Styles.Container>
            </Styles.ContainerWrapper>

            <HeroSocialProof />
        </>
    )
}

export default LPHero
