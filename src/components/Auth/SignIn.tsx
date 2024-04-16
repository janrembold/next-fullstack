'use client'

import useTranslation from 'next-translate/useTranslation'

export function SignIn() {
    const { t } = useTranslation('common')

    return <a href="/api/auth/login">{t('login')}</a>
}
