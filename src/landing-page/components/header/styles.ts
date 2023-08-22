import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.header`
    ${tw`w-full fixed top-0 left-0 z-[3]`}
    height: ${({ theme }) => theme.spacing.landing_page_header_height};
    background: #ffffff26;
`

const Container = styled(AppContainer)`
    ${tw`py-0 h-full flex items-center justify-between sm:justify-start`}
`

const Image = styled.img`
    ${tw`h-12 sm:ml-auto sm:h-8`}
`

const Group = styled.section`
    ${tw`sm:hidden`}
`

const Link = styled.a`
    ${tw`ml-4 cursor-pointer relative text-sm`}

    &:hover,
    &:last-of-type {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const Button = styled.button`
    ${tw`hidden text-lg sm:block sm:ml-auto`}
`

const Badge = styled.span`
    ${tw`p-0.5 px-2 rounded-md font-light text-[0.68rem] absolute left-6 bottom-4`}
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
`

export default {
    Container,
    Header,
    Button,
    Image,
    Group,
    Badge,
    Link
}
