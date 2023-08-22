import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerProps {
    image: string
}
const Container = styled.article<IContainerProps>`
    ${tw`h-[400px] w-full rounded-2xl flex items-end`}
    background: ${({ image }) => `url('${image}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Content = styled.div`
    ${tw`p-4 px-12 gap-12 flex items-center rounded-b-2xl justify-between`}
    background: rgba(44, 44, 44, 0.50);
    backdrop-filter: blur(3px);
`

const View = styled.div``

const Title = styled.h2`
    ${tw`font-semibold mb-4`}
`

const Text = styled.p``

const Button = styled(AppButton)`
    ${tw`px-12! `}
    white-space: nowrap;
`

export default {
    Container,
    Content,
    View,
    Title,
    Text,
    Button
}
