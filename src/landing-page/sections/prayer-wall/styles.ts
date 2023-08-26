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
    ${tw`sm:text-center`}
`

const Button = styled(AppButton)`
    ${tw`w-2/5 my-8 sm:w-full`}
`

export default {
    Title,
    Button,
    Subtitle,
    Container
}
