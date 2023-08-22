import { AppContainer } from '@/styles/ts/components'
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
    ${tw`mt-4 grid grid-cols-4 gap-4`}
`

export default {
    Container,
    Subtitle,
    Title,
    Grid
}
