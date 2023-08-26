import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerProps {
    image: string
}
const Container = styled.article<IContainerProps>`
    ${tw`h-[374px] w-full flex items-end rounded-2xl`}
    background: ${({ image }) => `url('${image}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Content = styled.section`
    ${tw`p-4 w-full flex flex-col items-center rounded-b-2xl`}
    backdrop-filter: blur(1.5px);
    background: rgba(44, 44, 44, 0.7);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Text = styled.p`
    ${tw`w-full sm:text-center`}
`

const Button = styled(AppButton)`
    ${tw`mt-4`}
`

export default {
    Container,
    Content,
    Text,
    Button
}
