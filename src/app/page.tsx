import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('test')
  const formattedTimestamp = new Date().toLocaleString()

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{formattedTimestamp}</p>
    </div>
  )
}
