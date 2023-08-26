import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`h-[374px] sm:h-[320px]`}

    .swiper-pagination {
        ${tw`px-9 w-full gap-4 flex items-center  sm:pb-6`}

        .swiper-pagination-bullet {
            ${tw`h-2 w-full rounded-full`}
        }

        .swiper-pagination-bullet-active {
            background: ${({ theme }) => theme.colors.primary};
        }
    }
`

interface ICardProps {
    image: string
}
const Card = styled.div<ICardProps>`
    ${tw`flex items-end h-full w-full p-2 rounded-2xl`}

    background: ${({ image }) => `url('${image}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Footer = styled.footer`
    ${tw`mb-4 px-8 w-full flex items-center justify-between sm:hidden`}
`

const View = styled.div``

const Title = styled.h5`
    ${tw`font-bold`}
`

const Text = styled.p``

const Button = styled(AppButton)``

export default {
    Container,
    Card,
    View,
    Footer,
    Title,
    Text,
    Button
}
