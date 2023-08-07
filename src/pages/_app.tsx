import store from '@/store'
import { useMapState } from '@/hooks'
import { Provider } from 'react-redux'
import Layout from '@/layouts/default'
import { useRouter } from 'next/router'
import THEMES from '@/styles/ts/themes'
import type { AppProps } from 'next/app'
import AdminLayout from '@/layouts/admin'
import { persistStore } from 'redux-persist'
import GlobalStyle from '@/styles/ts/global'
import { ThemeProvider } from 'styled-components'
import { RouterUltil } from '@/utils/router.ultil'
import AppToast from '@/components/common/app-toast'
import { ReactNode, useContext, useEffect } from 'react'
import AppLoading from '@/components/common/app-loading'
import { PersistGate } from 'redux-persist/integration/react'
import { AuthContext, AuthProvider } from '@/contexts/auth.context'
import { UiStateInterface } from '@/store/@interfaces/uiState.interface'
import '@/styles/css/global.css'

const persistor = persistStore(store)
const routerUltil = new RouterUltil()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const { theme } = useMapState('ui') as UiStateInterface
    const { isAuthenticated, isAdmin } = useContext(AuthContext)

    const layoutControl = (component: ReactNode) => {
        const isLandingPageMoule = routerUltil.isLangingPageRoute()
        const isAuthenticationModule = routerUltil.isAuthenticationRoute()

        if (isLandingPageMoule) return <Layout>{component}</Layout>
        if (isAuthenticationModule) return <Layout>{component}</Layout>
        if (isAuthenticated) return <AdminLayout>{component}</AdminLayout>

        return <Layout>{component}</Layout>
    }

    useEffect(() => {
        routerUltil.checkPermission(isAdmin, isAuthenticated)
    }, [router.pathname])

    return (
        <ThemeProvider theme={THEMES[theme]}>
            <GlobalStyle />
            <AppLoading />
            <AppToast />

            {layoutControl(<Component {...pageProps} />)}
        </ThemeProvider>
    )
}

const AppWrapper: React.FC<AppProps> = props => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AuthProvider>
                    <App {...props} />
                </AuthProvider>
            </PersistGate>
        </Provider>
    )
}

export default AppWrapper
