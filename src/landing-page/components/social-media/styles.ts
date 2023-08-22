import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`gap-8 flex items-center justify-center sm:flex-row!`}
`

const Icon = styled.i`
    ${tw`text-lg cursor-pointer transition-all duration-500`}

    &:hover {
        transform: scale(0.94);
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export default { Container, Icon }
