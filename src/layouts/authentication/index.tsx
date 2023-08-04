import React from 'react'
import Styles from './styles'

interface IAuthenticationLayout {
    children: React.ReactNode
    image?: string
    title?: string
    text?: string
}

const AuthenticationLayout: React.FC<IAuthenticationLayout> = props => {
    const { children, title = '', text = '', image } = props

    return (
        <Styles.Container>
            <Styles.Content>
                {!!title && <Styles.Title>{title}</Styles.Title>}
                {!!title && <Styles.Text>{text}</Styles.Text>}

                <Styles.Main>{children}</Styles.Main>
            </Styles.Content>

            <Styles.Image src={image} />
        </Styles.Container>
    )
}

export default AuthenticationLayout
