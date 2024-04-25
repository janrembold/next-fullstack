import { useContext } from 'react'
import { LocaleContext } from '@/context/LocaleProvider'

export const useLocale = () => useContext(LocaleContext)
