import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/ts/components'
import { rgba } from 'polished'

const Container = styled(AppContainer)`
    ${tw`flex items-stretch justify-around gap-12 items-center relative bottom-24 sm:static sm:flex-col`}
`

const Card = styled.article`
    ${tw`rounded-2xl flex flex-col items-center justify-center w-[30%] h-[190px]  sm:w-full`}
    background: ${({ theme }) => rgba(theme.colors.bgSecondary, 0.7)};
    backdrop-filter: blur(3px);
`

const Title = styled.h1`
    ${tw`text-xl font-bold text-[3.75rem]`}
    color: ${({ theme }) => theme.colors.primary};
`

const Subtitle = styled.h2``

const SocialMediaContainer = styled.section`
    ${tw`mt-4`}
`

export default {
    Card,
    Title,
    Subtitle,
    Container,
    SocialMediaContainer
}
