import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup } from '@/styles/ts/components'

const Container = styled(AppFormGroup)``

interface ITextareaProps {
    resize?: boolean
}
const Textarea = styled.textarea<ITextareaProps>`
    resize: ${({ resize }) => (resize ? 'vertical' : 'none')};
`

const Label = styled.label`
    ${tw`text-left`}
`

const Span = styled.span``

export default {
    Container,
    Textarea,
    Label,
    Span
}
