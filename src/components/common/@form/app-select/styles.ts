import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup } from '@/styles/ts/components'

const FormGroup = styled(AppFormGroup)`
    *:first-child {
        ${tw`mr-2`}
    }
`

const Label = styled.label``

const Checkbox = styled.input``

export default { FormGroup, Checkbox, Label }
