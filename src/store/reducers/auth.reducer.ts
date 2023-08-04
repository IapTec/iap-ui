import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../@interfaces/auth.interface'
import { IUser } from '@/interfaces/user.interface'
import { UserRole } from '@/enums/user-role.enum'

const initialState: IAuthState = {
    role: 0,
    user: {},
    token: ''
} as IAuthState

const { actions: mutations, reducer } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole(state, { payload }) {
            state.role = payload
        },
        setUser(state, { payload }) {
            state.user = payload
        },
        setToken(state, { payload }) {
            state.token = payload
        },
        reset(state) {
            state.role = 0 as UserRole
            state.user = {} as IUser
        }
    }
})

export const authActions = {
    reset: () => store.dispatch(mutations.reset()),
    setUser: (payload: IUser) => store.dispatch(mutations.setUser(payload)),
    setRole: (payload: number) => store.dispatch(mutations.setRole(payload)),
    setToken: (payload: string) => store.dispatch(mutations.setToken(payload))
}

export default reducer
