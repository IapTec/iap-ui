import tw from 'twin.macro'
import styled from 'styled-components'
import InlineForm from './common-inline-form'
import { AppButton, AppContainer } from '../ts/components'

const Container = styled(AppContainer)``

const PageTitle = styled.h1`
    ${tw`text-lg`}
`

const PageNav = styled.nav`
    ${tw`mb-8 flex gap-4 items-center justify-end`}

    >:first-child {
        ${tw`mr-auto`}
    }
`

const Form = styled.form``

const View = styled.div``

const Button = styled(AppButton)``

const FilterNav = styled.nav`
    ${tw`w-full mb-8 flex gap-4 items-center justify-end`}
`

export default {
    InlineForm,
    FilterNav,
    Container,
    PageTitle,
    PageNav,
    Button,
    View,
    Form
}
