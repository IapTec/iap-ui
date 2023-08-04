import tw from 'twin.macro'
import styled from 'styled-components'
import { AppInlineFormGroup } from '@/styles/ts/components'

const FormGroup = styled(AppInlineFormGroup)`
    ${tw`flex items-center`}

    *:first-child {
        ${tw`mr-2`}
    }

    > label {
        ${tw`mb-0`}
    }
`

const Label = styled.label``

const Checkbox = styled.input``

export default { FormGroup, Checkbox, Label }
