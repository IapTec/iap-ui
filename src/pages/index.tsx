import React from 'react'
import Styles from '@/styles/pages/home'
import enviroments from '@/config/enviroments'
import AppHead from '@/components/common/app-head'
import ExempleForm from '@/components/exemple-form'
import { THEME_ITEMS } from '@/contants/theme-type'
import { uiActions } from '@/store/reducers/ui.reducer'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Hello World" />

            <Styles.Container>
                <Styles.Title>Hello World</Styles.Title>
                ENV: {enviroments.apiUrl}
                <Styles.Content>
                    {THEME_ITEMS.map((item, index) => (
                        <Styles.Button
                            key={index}
                            onClick={() => uiActions.setTheme(item.id)}
                        >
                            {item.label}
                        </Styles.Button>
                    ))}
                </Styles.Content>
                <ExempleForm />
            </Styles.Container>
        </>
    )
}

export default Home
