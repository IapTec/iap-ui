import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`flex gap-6 items-center justify-center sm:justify-start sm:pb-2 sm:px-1 sm:overflow-x-auto sm:w-full`}
`

const Title = styled.h2`
    ${tw`font-semibold cursor-pointer py-2 sm:whitespace-nowrap`}
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: transparent;

    &:hover,
    &.active {
        color: ${({ theme }) => theme.colors.primary};
        border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
`

export default { Container, Title }
