import useTranslation from 'next-translate/useTranslation'

export const Translation = () => {
    const { t } = useTranslation('about')
    const example = t('variable-example', { count: 42 })

    return (
        <>
            <h1>{t('title')}</h1>
            <div>{example}</div>
        </>
    )
}
