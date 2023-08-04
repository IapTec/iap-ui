import { rgba } from 'polished'
import { css } from 'styled-components'

export const menuItemActive = (isActive: boolean) => css`
    background: ${({ theme }) =>
        isActive ? rgba(theme.colors.primary, 0.05) : 'transparent'};

    h4,
    svg {
        color: ${({ theme }) =>
            isActive ? theme.colors.primary : theme.colors.text};
    }
`
