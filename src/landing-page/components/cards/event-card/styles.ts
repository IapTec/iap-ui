import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`w-full`}
`

interface IFigureProps {
    image: string
}
const Figure = styled.figure<IFigureProps>`
    ${tw`h-[248px] w-full rounded-2xl`}
    background: ${({ image }) => `url('${image}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Title = styled.h3`
    ${tw`font-semibold my-3`}
`

const Text = styled.p``

const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`

export default {
    Container,
    Figure,
    Title,
    Text,
    Button
}
