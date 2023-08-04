export default {
    api_url: process.env.NEXT_PUBLIC_API_URL,
    analytics_id: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
    ads_analytics_id: process.env.NEXT_PUBLIC_ANALYTICS_ADS_ID || '',
    mailersend_api_key: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY || '',

    firebase_app_id: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    firebase_api_key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    firebase_auth_domain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    firebase_project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    firebase_storage_bucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    firebase_messaging_sender_id:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
}
