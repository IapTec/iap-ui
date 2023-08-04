import maskTypes from '@/utils/mask'

type MaskTypes = keyof typeof maskTypes

export const useMask = (mask: MaskTypes) => {
    return maskTypes[mask]
}
