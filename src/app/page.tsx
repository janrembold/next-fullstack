import { useServerTranslation } from '@/i18n/server'

export default async function Page() {
    const { t } = await useServerTranslation('home')

    return (
        <div>
            <h1>{t('greeting')}</h1>
        </div>
    )
}
