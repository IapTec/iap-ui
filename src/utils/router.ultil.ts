import Router from 'next/router'

export class RouterUltil {
    public readonly USER_ROUTER = ['/portal']
    public readonly ADMIN_ROUTER = ['/admin']
    public readonly PRIVATE_ROUTER = [...this.USER_ROUTER, ...this.ADMIN_ROUTER]

    public readonly INITAL_ROUTE_USER = '/'
    public readonly INITAL_ROUTE_ADMIN = '/admin/event'

    private router = Router

    constructor() {}

    public isLangingPageRoute() {
        return this.router.pathname === '/'
    }

    public isAuthenticationRoute() {
        return this.router.pathname.includes('authentication')
    }

    public isAdminRoute(path: string) {
        return this.ADMIN_ROUTER.some(route => route.startsWith(path))
    }

    public isUserRoute(path: string) {
        return this.USER_ROUTER.some(route => route.startsWith(path))
    }

    public isPrivateRoute(path: string) {
        return this.PRIVATE_ROUTER.some(route => route.startsWith(path))
    }

    public checkPermission(isAdmin: boolean, isLogged: boolean) {
        if (this.isLangingPageRoute()) return true

        if (isLogged && this.isAuthenticationRoute()) {
            if (isAdmin) this.redirectToAdminHome()
            else this.redirectToUserHome()

            return true
        }

        const startRoutePath = `/${this.router.pathname.split('/')[1]}`

        const isBlockUser = !isAdmin && this.isAdminRoute(startRoutePath)
        const isBlockAdmin = isAdmin && this.isUserRoute(startRoutePath)
        const isBlockAll = !isLogged && this.isPrivateRoute(startRoutePath)

        if (isBlockAll) this.redirectToLogin()
        else if (isBlockUser) this.redirectToUserHome()
        else if (isBlockAdmin) this.redirectToAdminHome()

        return true
    }

    public redirectToLogin() {
        this.router.push('/authentication/login')
    }

    public redirectToUserHome() {
        this.router.push(this.INITAL_ROUTE_USER)
    }

    public redirectToAdminHome() {
        this.router.push(this.INITAL_ROUTE_ADMIN)
    }
}
