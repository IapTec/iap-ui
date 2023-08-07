import { ReactNode } from 'react'

export interface IActionTable {
    icon: ReactNode
    title?: string
    onClick: () => void
}
