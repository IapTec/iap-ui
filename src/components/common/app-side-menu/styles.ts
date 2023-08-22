import { AppContainer } from '@/styles/ts/components'
import tw from 'twin.macro'
import styled from 'styled-components'

interface IContainerProps {
    imageBg?: string
}
const Container = styled(AppContainer)<IContainerProps>`
    ${tw`h-screen w-screen z-20 px-8 pt-0 fixed top-0 left-0 overflow-y-auto`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    background-image: ${({ imageBg }) => (imageBg ? `url(${imageBg})` : '')};
    background-position: center;
    background-size: 100%;

    ${tw`sm:bg-cover!`}
`

const Header = styled.nav`
    ${tw`w-full grid grid-cols-3`}
    height: ${({ theme }) => `${theme.spacing.landing_page_header_height}`};

    &:after {
        content: '';
    }
`

const Figure = styled.figure`
    ${tw`flex items-center justify-center`}
`

const Image = styled.img``

const Button = styled.button`
    ${tw`text-[1.8rem]`}
    color: ${({ theme }) => theme.colors.primary};
`

interface IContentProps {
    fullContent?: boolean
}

const Content = styled.section<IContentProps>`
    min-height: ${({ theme }) =>
        `calc(100vh - ${theme.spacing.landing_page_header_height})`};

    > :first-child {
        min-height: ${({ theme, fullContent }) =>
            fullContent &&
            `calc(100vh - ${theme.spacing.landing_page_header_height})`};
    }
`

export default { Container, Content, Header, Figure, Button, Image }
