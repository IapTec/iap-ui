import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerProps {
    image: string
}
const Container = styled.article<IContainerProps>`
    ${tw`h-[400px] w-full rounded-2xl flex items-end transition-all duration-700 sm:bg-cover`}
    background: ${({ image }) => `url('${image}')`};
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        background-size: 105%;
    }

    @media (max-width: 640px) {
        background-size: cover;
    }
`

const Content = styled.div`
    ${tw`p-4 px-12 gap-12 flex items-center rounded-b-2xl justify-between sm:h-[25%] sm:px-4 sm:pb-6!`}
    background: rgba(44, 44, 44, 0.50);
    backdrop-filter: blur(3px);
`

const View = styled.div``

const Title = styled.h2`
    ${tw`font-semibold mb-4 sm:mb-2`}
`

const Text = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 3 * 1.2em;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;

    @media (max-width: 640px) {
        ${tw`text-sm `}
        -webkit-line-clamp:2;
        max-height: 2 * 1.2em;
    }
`

const Button = styled(AppButton)`
    ${tw`px-12! `}
    white-space: nowrap;

    &.know-more {
    }
`

const ButtonKnowMore = styled.button`
    ${tw`text-lg`}
    color: ${({ theme }) => theme.colors.primary};
`

export default {
    ButtonKnowMore,
    Container,
    Content,
    View,
    Title,
    Text,
    Button
}
