import React from 'react'
import Styles from './styles'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

import AppAccordion, {
    useAppAccordionRef
} from '@/components/common/app-accordion'
import {
    IFaqQuestion,
    IFaqQuestionItem
} from '@/landing-page/components/@interfaces/common-question.interface'

const LPFaq: React.FC = () => {
    const questions: IFaqQuestion[] = [
        {
            title: `Como faço para ser um patrocinador da Apocalipse?`,
            text: `Entre em contato com nosso departamento de marketing (11) 97848-5904, temos uma equipe preparada para te atender!`
        },
        {
            title: `Como saber a data do próximo evento?`,
            text: `Toda a agenda de eventos será publicada nesse portal e em nossas redes sociais, então fique ligado pois em breve teremos atualizações.`
        },
        {
            title: `Como faço para me tornar um voluntário?`,
            text: `Entre em contato com nosso departamento de marketing (11) 97848-5904, temos uma equipe preparada para te atender! será um prazer ter você conosco.`
        },
        {
            title: `Como participar de um evento?`,
            text: `Nossas vigilias são abertas ao publico, estamos de braços abertos esperando por você.`
        }
    ]

    const questionsResult: IFaqQuestionItem[] = questions.map(question => ({
        question,
        ref: useAppAccordionRef() // eslint-disable-line react-hooks/rules-of-hooks
    }))

    const onAcordionOpen = (index: number) => {
        questionsResult.forEach((item, itemIndex) => {
            if (index !== itemIndex) item.ref.current?.close()
        })
    }

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.faq}>
            <Styles.Text>
                Essa sessão foi pensada para ajudar você a entender melhor nosso
                processo. Aqui estão as principais questões.
            </Styles.Text>

            <Styles.Content>
                {questionsResult.map((item, index) => (
                    <AppAccordion
                        key={index}
                        ref={item.ref}
                        title={item.question.title}
                        onOpen={() => onAcordionOpen(index)}
                    >
                        {item.question.text}
                    </AppAccordion>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPFaq
