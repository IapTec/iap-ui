import tw from 'twin.macro'
import images from '@/assets/images'
import styled from 'styled-components'
import { AppContainer } from '@/styles/ts/components'

const ContainerWrapper = styled.section`
    ${tw`h-[700px] sm:h-[94vh] w-full`}
    background: ${() => `url('${images.landingPage.HeroBG}')`};
    padding-top: ${({ theme }) => theme.spacing.landing_page_header_height};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: inset 200vw 200vw 200vw 200vw rgba(0, 0, 0, 0.75);
`

const Container = styled(AppContainer)`
    ${tw`h-full pt-16`}
`

const Content = styled.section`
    ${tw`grid grid-cols-2 items-center sm:justify-items-center sm:grid-cols-1`}
`

const Title = styled.h1`
    ${tw`text-xl mb-8 font-semibold`}
`

const Text = styled.p``

const Image = styled.img`
    ${tw`sm:w-3/5 sm:mt-12`}
`

const View = styled.div``

const SocialMediaContainer = styled.section`
    ${tw`mt-4 flex flex-col items-start sm:items-center`}
`

export default {
    SocialMediaContainer,
    ContainerWrapper,
    Container,
    Content,
    Title,
    View,
    Text,
    Image
}
