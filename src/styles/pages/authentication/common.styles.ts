import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/ts/components'

const Form = styled.form``

const Link = styled.a`
    ${tw`font-semibold cursor-pointer`}
    color: ${({ theme }) => theme.colors.primary};
`

const Button = styled(AppButton)`
    ${tw`w-full text-lg mb-4 mt-20`}
`
export default {
    Button,
    Form,
    Link
}
