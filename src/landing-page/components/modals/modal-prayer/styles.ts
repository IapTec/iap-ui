import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Form = styled.form`
    ${tw`p-8 py-6 w-full flex flex-col items-center`}

    > * {
        ${tw`w-full`}
    }
`

const Image = styled.img`
    ${tw`w-48`}
`

const Title = styled.h1`
    ${tw`my-2 text-center text-lg font-semibold`}
`

const Subtitle = styled.h3`
    ${tw`mb-6 text-center`}
`

const Button = styled(AppButton)``

export default {
    Form,
    Image,
    Title,
    Button,
    Subtitle
}
