import { ReactNode } from 'react'

export interface ILandingPageMenuItem {
    id?: string
    title: string
    icon?: ReactNode
    isSoon?: boolean
    action?: Function
}
