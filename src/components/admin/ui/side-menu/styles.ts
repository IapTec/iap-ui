import tw from 'twin.macro'
import { rgba } from 'polished'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
    ${tw`p-3 pt-6 max-h-full w-full`}
`

const Container = styled.article`
    ${tw`p-4 h-full w-full flex flex-col items-center rounded-2xl shadow-md`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const ButtonIcon = styled.button`
    ${tw`mb-4 self-end border-none outline-none text-[1.4rem] cursor-pointer`}
    background: none;
    color: ${({ theme }) => theme.colors.red};
`

const UserContainer = styled.section``

const Separator = styled.hr`
    ${tw`w-[90%] my-6`}
    border-color: ${({ theme }) => theme.colors.bgPrimary};
`

const Image = styled.img`
    ${tw`rounded-full w-28 h-28 shadow-md`}
    outline: 2px solid ${({ theme }) => theme.colors.primary};
`

const Title = styled.h5`
    ${tw`mt-4 text-[1rem] text-center font-semibold`}
`

const ItemsGroup = styled.ul`
    ${tw`w-full`}
`

const Item = styled.li`
    ${tw`px-2 py-3 mb-2 flex items-center gap-2 rounded-xl list-none cursor-pointer transition-all duration-500`}

    &:hover {
        ${tw`shadow-lg`}

        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => rgba(theme.colors.bgPrimary, 0.4)};
    }
`

const Icon = styled.i`
    ${tw`text-lg relative top-0.5`}
`

const Text = styled.span``

export default {
    Icon,
    Item,
    Text,
    Image,
    Title,
    Separator,
    Container,
    ButtonIcon,
    ItemsGroup,
    UserContainer,
    ContainerWrapper
}
