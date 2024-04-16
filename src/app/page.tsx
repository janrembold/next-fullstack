import { LanguageSwitch } from '@/components/LanguageSwitch/LanguageSwitch'
import useTranslation from 'next-translate/useTranslation'
import { Suspense } from 'react'

export default function Home() {
    const { t } = useTranslation('common')

    return (
        <>
            <h1>{t('title')}</h1>
            <p>Welcome</p>
            <Suspense>
                <LanguageSwitch />
            </Suspense>
        </>
    )
}
