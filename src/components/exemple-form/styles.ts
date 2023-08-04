import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/ts/components'

const Form = styled.form`
    ${tw`w-2/5`}
`

const Button = styled(AppButton)`
    ${tw`w-full`}
`

export default { Form, Button }
