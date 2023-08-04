import tw from 'twin.macro'
import styled from 'styled-components'
import { fadeIn } from '../animation'
import { AppButton, AppContainer } from '../ts/components'

const Container = styled(AppContainer)`
    ${tw`min-h-screen flex flex-col justify-center items-center`}
`

const Title = styled.h1.attrs(fadeIn.down)`
    ${tw`text-lg`}
`

const Image = styled.img.attrs(fadeIn.default)`
    ${tw`mt-8`}
`

const Content = styled.article`
    ${tw`my-8 flex`}
`

const Button = styled(AppButton).attrs(fadeIn.up)`
    ${tw`min-w-[150px]`}

    &:first-of-type {
        ${tw`mr-4`}
    }
`

export default {
    Container,
    Title,
    Image,
    Content,
    Button
}
