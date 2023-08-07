import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../ts/components'

const Container = styled(AppContainer)`
    ${tw`flex flex-col min-h-screen`}
`

const Subtitle = styled.h5`
    ${tw`my-12 font-semibold`}
`

const Button = styled(AppButton)``

const Text = styled.p``

const TextSmall = styled.p`
    ${tw`text-sm`}
`

const TextBold = styled.h5`
    ${tw`font-semibold`}
`

const Form = styled.form`
    ${tw`mb-10`}

    > div {
        ${tw`grid gap-8 grid-cols-[30% 1fr] sm:block`}

        > span {
            ${tw`top-4`}
        }
    }
`

const Footer = styled.footer`
    ${tw`mt-auto flex items-center justify-between`}
`

const FormRow = styled.div`
    grid-template-columns: 30% 1fr 1fr !important;
`

const Label = styled.label`
    ${tw`block mb-2 font-medium text-left`}
    color: ${({ theme }) => theme.colors.text};
`

export default {
    Container,
    TextSmall,
    TextBold,
    Subtitle,
    FormRow,
    Button,
    Footer,
    Label,
    Text,
    Form
}
