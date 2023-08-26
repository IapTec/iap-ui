import { AppButton, AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center`}
`

const Title = styled.h1`
    ${tw`text-xl font-semibold mb-2`}
`

const Subtitle = styled.h4`
    ${tw`mb-8`}
`

const Grid = styled.section`
    ${tw`mt-4 flex items-center gap-4 w-full sm:flex-col`}
`

const CardContainer = styled.section`
    ${tw`w-2/4 grid grid-cols-2 gap-4 sm:w-full`}
`

const Card = styled.a`
    ${tw`flex cursor-pointer items-center justify-center rounded-2xl p-4`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Button = styled(AppButton)`
    ${tw`bg-transparent`};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default {
    Grid,
    Title,
    Button,
    Card,
    Subtitle,
    Container,
    CardContainer
}
