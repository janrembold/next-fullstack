import { fetcher } from '@/utils/fetcher'
import { ErrorLog } from '@prisma/client'
import useSWR from 'swr'

interface useErrorLogProps {
    take?: number
    search?: string
}

export const useErrorLog = ({ take = 5, search = '' }: useErrorLogProps) => {
    const {
        data: logs,
        error: isError,
        isLoading,
    } = useSWR(
        `/api/v1/error-log?take=${take}&search=${search}`,
        fetcher<ErrorLog[]>,
    )

    console.log('useErrorLog', { logs, isError, isLoading })

    return {
        logs,
        isLoading,
        isError,
    }
}
