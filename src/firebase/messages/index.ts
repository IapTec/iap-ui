export const FIREBASE_AUTH_MESSAGES = {
    'auth/weak-password': 'Senha fraca.',
    'auth/invalid-email': 'E-mail inválido.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/app-deleted': 'Aplicativo excluído.',
    'auth/argument-error': 'Erro de argumento.',
    'auth/user-disabled': 'Usuário desabilitado.',
    'auth/too-many-requests': 'Muitas solicitações.',
    'auth/invalid-api-key': 'Chave de API inválida.',
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/unauthorized-domain': 'Domínio não autorizado.',
    'auth/invalid-user-token': 'Token de usuário inválido.',
    'auth/app-not-authorized': 'Aplicativo não autorizado.',
    'auth/operation-not-allowed': 'Operação não permitida.',
    'auth/user-token-expired': 'Token de usuário expirado.',
    'auth/network-request-failed': 'Falha na solicitação de rede.',
    'auth/email-already-in-use': 'Endereço de e-mail já cadastrado',
    'auth/web-storage-unsupported': 'Armazenamento web não suportado.',
    'auth/invalid-verification-code': 'Código de verificação inválido.'
}

export const FIREBASE_MESSAGES = {
    ...FIREBASE_AUTH_MESSAGES,
    default: 'Ocorreu um erro ao processar a solicitação.'
}

export type FirebaseMessageCode = keyof typeof FIREBASE_MESSAGES
