import { useMapState } from '@/hooks'
import React, { createContext } from 'react'
import { UserRole } from '@/enums/user-role.enum'
import { RouterUltil } from '@/utils/router.ultil'
import { authActions } from '@/store/reducers/auth.reducer'
import { UserService } from '@/firebase/services/user.service'
import { IAuthState } from '@/store/@interfaces/auth.interface'
import { ICredential } from '@/interfaces/authentication.interface'
import { AuthenticationService } from '@/firebase/services/authentication.service'

interface AuthContextData {
    role: UserRole
    isAdmin: boolean
    isAuthenticated: boolean
    login: (T: ICredential) => Promise<boolean>
    logout: () => void
}

interface IAuthProviderProps {
    children: React.ReactNode
}

const routerUltil = new RouterUltil()
const userService = new UserService()
const authenticationService = new AuthenticationService()

const AuthContext = createContext<AuthContextData>({
    isAdmin: false,
    logout: () => {},
    role: 0 as UserRole,
    isAuthenticated: false,
    login: async (T: ICredential) => new Promise(resolve => resolve(true))
})

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const { token, role } = useMapState<IAuthState>('auth')
    const getIsAdmin = (role: number) => role !== UserRole.Member

    const handleUserLogin = (role: number) => {
        const isAdmin = getIsAdmin(role)

        if (isAdmin) routerUltil.redirectToAdminHome()
        else routerUltil.redirectToUserHome()
    }

    const login = async (payload: ICredential) => {
        try {
            const response = await authenticationService.login(payload)
            const userResponse = await userService.getById(response.uid)
            const role = userResponse.role.id

            authActions.setRole(role)
            authActions.setUser(userResponse)
            authActions.setToken(response.refreshToken)

            handleUserLogin(role)
            return true
        } catch (error) {
            throw error
        }
    }

    const logout = () => {
        routerUltil.redirectToLogin()
        authActions.reset()
    }

    const providerValue: AuthContextData = {
        role,
        login,
        logout,
        isAuthenticated: !!token,
        isAdmin: getIsAdmin(role)
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
