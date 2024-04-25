'use client'

import { FALLBACK_LOCALE, Locales } from '@/i18n/settings'
import { createContext } from 'react'

export const LocaleContext = createContext<Locales>(FALLBACK_LOCALE)
export const LocaleProvider = ({
    children,
    value,
}: {
    children: React.ReactNode
    value: Locales
}) => {
    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    )
}
