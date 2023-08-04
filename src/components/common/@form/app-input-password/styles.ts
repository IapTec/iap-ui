import { AppFormGroup } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled(AppFormGroup)``

const Container = styled(AppFormGroup)`
    ${tw`flex mb-0`}
`

const Input = styled.input`
    ${tw`flex-1 rounded-r-none`}
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
`

const Button = styled.button`
    ${tw`h-12 text-[1.4rem] bg-transparent rounded-r-xl flex items-center justify-center cursor-pointer`}
    color: ${({ theme }) => theme.colors.primary};
`

const Label = styled.label``

const Span = styled.span``

export default {
    Container,
    Wrapper,
    Input,
    Button,
    Label,
    Span
}
