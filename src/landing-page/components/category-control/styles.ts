import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`flex gap-6 items-center justify-center`}
`

const Title = styled.h2`
    ${tw`font-semibold cursor-pointer py-2`}
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
