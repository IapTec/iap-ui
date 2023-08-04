import { getAuth } from 'firebase/auth'
import enviroments from '@/config/enviroments'
import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'

const initialize = initializeApp({
    appId: enviroments.firebase_app_id,
    apiKey: enviroments.firebase_api_key,
    projectId: enviroments.firebase_project_id,
    authDomain: enviroments.firebase_auth_domain,
    storageBucket: enviroments.firebase_storage_bucket,
    messagingSenderId: enviroments.firebase_messaging_sender_id
})

export const firebaseApp = !getApps().length ? initialize : getApps()[0]
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseFirestore = getFirestore(firebaseApp)
