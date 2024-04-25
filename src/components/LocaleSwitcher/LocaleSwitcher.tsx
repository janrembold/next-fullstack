'use client'

import { switchLocaleAction } from '@/app/actions/switchLocale'
import { useClientTranslation } from '@/i18n/client'
import { supportedLocales } from '@/i18n/settings'

export function LocaleSwitcher() {
    const { i18n, t } = useClientTranslation('common')

    return (
        <div>
            <select
                onChange={(e) => switchLocaleAction(e.target.value)}
                value={i18n.resolvedLanguage}
            >
                {supportedLocales.map((locale) => (
                    <option key={locale} value={locale}>
                        {t(`language.${locale}`)}{' '}
                    </option>
                ))}
            </select>
        </div>
    )
}
