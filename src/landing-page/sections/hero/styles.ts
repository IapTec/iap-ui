import tw from 'twin.macro'
import images from '@/assets/images'
import styled from 'styled-components'
import { AppContainer } from '@/styles/ts/components'

const ContainerWrapper = styled.section`
    ${tw`h-[90vh] w-full`}
    background: ${() => `url('${images.landingPage.HeroBG}')`};
    padding-top: ${({ theme }) => theme.spacing.landing_page_header_height};

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Container = styled(AppContainer)`
    ${tw`h-full pt-16`}
`

const Content = styled.section`
    ${tw`grid grid-cols-2 items-center`}
`

const Title = styled.h1`
    ${tw`text-lg mb-4 font-semibold`}
`

const Text = styled.p``

const Image = styled.img``

const View = styled.div``

export default {
    ContainerWrapper,
    Container,
    Content,
    Title,
    View,
    Text,
    Image
}
