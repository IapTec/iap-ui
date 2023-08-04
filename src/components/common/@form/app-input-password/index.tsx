import Styles from './styles'
import React, { useState } from 'react'
import AppInput, { AppInputProps } from '../app-input'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface AppInputPasswordProps extends AppInputProps {}

const AppInputPassword: React.FC<AppInputPasswordProps> = props => {
    const [isShow, setIsShow] = useState(false)

    return (
        <AppInput
            {...props}
            type={isShow ? 'text' : 'password'}
            leftSlot={
                <Styles.Button type="button" onClick={() => setIsShow(!isShow)}>
                    {isShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </Styles.Button>
            }
        />
    )
}

export default AppInputPassword
