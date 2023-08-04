import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup, AppInlineFormGroup } from '@/styles/ts/components'

const FormGroup = styled(AppFormGroup)`
    ${tw``}

    *:first-child {
        ${tw`mr-2`}
    }

    > label {
        ${tw`mb-0`}
    }
`

const Label = styled.label``

const Radio = styled.input`
    width: 28px !important;
    box-shadow: none !important;
    accent-color: ${props => props.theme.colors.secondary} !important;
`

const Item = styled.div`
    ${tw`flex items-center mr-2`}
`

interface IGroupProps {
    direction: 'row' | 'column'
}
const Group = styled.article<IGroupProps>`
    ${tw`mt-2 flex`}
    flex-direction: ${({ direction }) => direction};
`

const ItemLabel = styled.label``

const Span = styled.span`
    ${tw`w-full text-left left-0`}
`
export default { FormGroup, Radio, Label, Group, Item, Span, ItemLabel }
