import { css } from 'styled-components'
import Theme from '../theme'

export const scrollBar = (
    width: string = '12px',
    color: string = Theme.colors.primary
) => css`
    &::-webkit-scrollbar-track {
        background: ${Theme.colors.gray_light};
    }

    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar {
        width: ${width};
        background-color: ${color};
    }
`
