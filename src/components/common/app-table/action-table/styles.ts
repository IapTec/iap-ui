import styled from 'styled-components'
import tw from 'twin.macro'

interface IButtonProps {
    color?: string
}
const Button = styled.button<IButtonProps>`
    ${tw`mx-2 cursor-pointer`}
    background: none;

    > svg {
        ${tw`text-[1.4rem]`}
        color: ${({ color }) => color}
    }

    &:first-of-type {
        ${tw`ml-0`}
    }
    &:last-of-type {
        ${tw`mr-0`}
    }
`

const Container = styled.div`
    ${tw`flex items-center`}
`

export default {
    Container,
    Button
}
