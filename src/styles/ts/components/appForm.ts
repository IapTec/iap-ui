import tw from 'twin.macro'
import styled from 'styled-components'

export const AppFormGroup = styled.div`
    ${tw`w-auto mb-4`}

    > label {
        ${tw`block mb-2 font-medium text-left`}
        color: ${props => props.theme.colors.text};
    }

    > input,
    > select,
    > textarea {
        ${tw`w-full h-12 block rounded-xl py-1 px-3 border border-solid`}
        color: ${props => props.theme.colors.text} !important;
        text-rendering: optimizeLegibility !important;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        background: ${({ theme }) => theme.colors.bgSecondary};

        ::placeholder {
            color: ${({ theme }) => theme.colors.placeholder};
        }

        &:focus {
            ${tw`outline-none border border-solid`}
            border-color: ${props => props.theme.colors.primary};
        }
    }

    > textarea {
        ${tw`py-4 h-auto`}
    }

    input[type='radio'],
    input[type='checkbox'] {
        width: 20px !important;
        box-shadow: none !important;
        accent-color: ${props => props.theme.colors.primary} !important;
    }

    > span {
        ${tw`text-sm absolute`}
        color: ${props => props.theme.colors.red};
    }
`

export const AppInlineFormGroup = styled(AppFormGroup)`
    ${tw`flex items-center`}

    *:first-child {
        ${tw`mr-2`}
    }

    > label {
        ${tw`mb-0`}
    }
`
