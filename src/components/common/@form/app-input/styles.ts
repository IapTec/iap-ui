import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup } from '@/styles/ts/components'
import {
    formControlFill,
    formControlFocus,
    formControlError
} from '@/styles/ts/mixins/form-control.mixin'

const Container = styled(AppFormGroup)`
    ${tw`relative`}
    ${formControlError()}
`

const Wrapper = styled(AppFormGroup)`
    ${tw`flex border border-solid rounded-xl px-4 transition-all duration-300 mb-0`}
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-color: ${({ theme }) => theme.colors.gray_light};

    ${formControlFill()}
    ${formControlFocus()}
`

const IconContainer = styled.i`
    ${tw`h-12 flex items-center justify-center text-[1.4rem] transition-all duration-300`}
    color: ${({ theme }) => theme.colors.placeholder_icon};
`

const Input = styled.input`
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
`
const Label = styled.label`
    ${tw`text-left`}
`
const Span = styled.span`
    ${tw`w-full text-left left-0`}
`

export default {
    IconContainer,
    Container,
    Wrapper,
    Input,
    Label,
    Span
}
