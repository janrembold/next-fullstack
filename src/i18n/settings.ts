import type { InitOptions } from 'i18next'

export const FALLBACK_LOCALE = 'de'
export const supportedLocales = ['en', 'de'] as const
export type Locales = (typeof supportedLocales)[number]
export const LANGUAGE_COOKIE = 'NEXT_LANG'

export function getOptions(lang = FALLBACK_LOCALE, ns = 'common'): InitOptions {
    return {
        // debug: true,
        supportedLngs: supportedLocales,
        fallbackLng: FALLBACK_LOCALE,
        lng: lang,
        ns,
    }
}
