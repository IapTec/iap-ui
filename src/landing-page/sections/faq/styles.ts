import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:pb-2!`}
`

const Text = styled.p`
    ${tw`text-center my-8`}
`

const Content = styled.section`
    ${tw`w-8/12 sm:w-full`}

    > article {
        ${tw`rounded-none py-6 px-0 sm:border-none sm:mb-4`}
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};

        &:last-of-type {
            border-bottom: none;
        }

        > section {
            white-space: pre-line;
        }
    }
`

const Box = styled.article`
    ${tw`mt-12 pb-6 w-9/12 rounded-2xl flex flex-col items-center sm:mt-0 sm:w-full sm:bg-transparent`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Image = styled.img`
    ${tw`relative bottom-14 sm:hidden`}
`

const BoxTitle = styled.h2`
    ${tw`w-[44%] relative bottom-10 font-bold text-center text-[1.25rem] sm:w-full sm:static`}
`

const BoxText = styled.p`
    ${tw`relative bottom-8 text-center text-[1.125rem] sm:static sm:my-5`}
    color: rgba(255, 255, 255, 0.50);
`

export default {
    Container,
    Text,
    Content,
    Image,
    Box,
    BoxTitle,
    BoxText
}
