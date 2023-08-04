export interface ICredential {
    email: string
    password: string
}

export interface ILoginResponse {
    uid: string
    refreshToken: string
    email: string | null
    emailVerified: boolean
    photoURL: string | null
    phoneNumber: string | null
    displayName: string | null
}
