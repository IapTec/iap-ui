import { IAppAccordionRef } from '@/components/common/app-accordion'
import React from 'react'

export interface IFaqQuestion {
    text: string
    title: string
}

export interface IFaqQuestionItem {
    question: IFaqQuestion
    ref: React.RefObject<IAppAccordionRef>
}
