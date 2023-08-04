import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`h-full grid grid-cols-[40% 1fr]`}
`

const Content = styled.article`
    ${tw`h-full p-6 flex flex-col justify-center`}
`

const Main = styled.main`
    ${tw`mt-8 w-full`}
`

const Title = styled.h1`
    ${tw`text-xl mb-2`}
`

const Text = styled.p``

const Image = styled.img`
    ${tw`w-full h-full object-contain`}
`

export default {
    Container,
    Content,
    Image,
    Title,
    Text,
    Main
}
