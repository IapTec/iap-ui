import tw from 'twin.macro'
import { lighten } from 'polished'
import styled from 'styled-components'
import { AppButton } from '@/styles/ts/components'

const Container = styled.section`
    ${tw`flex flex-col items-center py-8 px-12`}

    > button {
        ${tw`mb-6 w-full relative`}
    }

    > article > i {
        ${tw`text-xl`}
    }
`

const Image = styled.img`
    ${tw`w-28 mb-2`}
`

const Title = styled.h4`
    ${tw`self-center font-semibold w-full text-center pb-6 text-xl`}
    border-bottom: 1px solid ${({ theme }) => theme.colors.placeholder};
`

const Group = styled.section`
    ${tw`w-full flex flex-col my-10`}
`

const Item = styled.a`
    ${tw`mb-6 text-[1.125rem] font-semibold cursor-pointer flex items-center gap-2`}

    > svg {
        ${tw`text-lg`}
        color: ${({ theme }) => theme.colors.placeholder};
    }

    &:last-of-type {
        ${tw`mb-0`}
    }
`

const Button = styled(AppButton)`
    ${tw`mt-0`}
`

const Header = styled.header`
    ${tw`px-8 w-full items-center justify-between fixed left-0 top-0 hidden sm:flex`}

    height: ${({ theme }) => theme.spacing.landing_page_header_height};
    background: ${({ theme }) => lighten(0.08, theme.colors.bgSecondary)};

    &::before {
        content: '';
    }
`

const HeaderImage = styled.img`
    ${tw`h-8`}
`

const HeaderButton = styled.button`
    color: ${({ theme }) => theme.colors.placeholder};
`

const Badge = styled.span`
    ${tw`p-0.5 px-2 rounded-md font-light text-sm absolute shadow-md right-4 top-[-1rem]`}
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
`

export default {
    Item,
    Title,
    Badge,
    Group,
    Image,
    Header,
    Button,
    Container,
    HeaderImage,
    HeaderButton
}
