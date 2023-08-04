import tw from 'twin.macro'
import styled from 'styled-components'

export const AppButton = styled.button`
    ${tw`h-[50px] p-2.5 px-4 border-0 outline-none cursor-pointer rounded-xl flex justify-center items-center`}

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    -webkit-tap-highlight-color: transparent;

    &:active {
        filter: brightness(70%);
    }

    &:disabled {
        ${tw`opacity-60 cursor-not-allowed`}
    }

    &.outline {
        ${tw`font-semibold bg-transparent`}
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.text};
    }

    > svg {
        ${tw`mr-2`}
    }
`
