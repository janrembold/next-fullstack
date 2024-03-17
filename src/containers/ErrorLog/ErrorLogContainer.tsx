'use client'

import { ErrorLogTable } from '@/components/ErrorLog/ErrorLogTable'

export const ErrorLogContainer = async () => {
    return (
        <div>
            <div>SEARCH</div>
            <div>FILTER</div>

            <ErrorLogTable />
        </div>
    )
}
