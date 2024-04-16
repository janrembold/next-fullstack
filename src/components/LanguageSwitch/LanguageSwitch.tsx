'use client'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useState } from 'react'

export const LanguageSwitch = () => {
    const { lang } = useTranslation()
    const [locale, setLocale] = useState(lang)

    const persistLocaleCookie = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};path=/`
        setLocale(locale)
    }

    return (
        <div>
            <span>Locale: {locale}</span> <span>Lang: {lang}</span>{' '}
            <Link
                href="/?lang=de"
                as="de"
                onClick={() => persistLocaleCookie('de')}
            >
                DE
            </Link>{' '}
            |{' '}
            <Link
                href="/?lang=en"
                as="en"
                onClick={() => persistLocaleCookie('en')}
            >
                EN
            </Link>
        </div>
    )
}
