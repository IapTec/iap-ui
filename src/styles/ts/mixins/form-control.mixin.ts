import { css } from 'styled-components'
import light_theme from '@/styles/ts/themes/light.theme'

export const formControlFocus = () => css`
    &:has(input:focus, select:focus, textarea:focus) {
        border-color: ${({ theme }) => theme.colors.primary};

        > i,
        > svg {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`

export const formControlFill = () => css`
    &:has(
            input:-webkit-autofill,
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active
        ) {
        box-shadow: ${`0 0 0 30px ${light_theme.colors.bgSecondary} inset !important`};

        > input {
            box-shadow: ${`0 0 0 30px ${light_theme.colors.bgSecondary} inset !important`};
        }
    }
`

export const formControlError = () => css`
    &:has(span) {
        > div {
            border-color: ${({ theme }) => theme.colors.red} !important;

            > i,
            > svg {
                color: ${({ theme }) => theme.colors.red} !important;
            }
        }
    }
`
