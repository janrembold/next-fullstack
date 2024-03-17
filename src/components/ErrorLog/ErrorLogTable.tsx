'use client'

import { useErrorLog } from '@/hooks/useErrorLog'

export const ErrorLogTable = () => {
    const { logs = [], isLoading } = useErrorLog({ take: 2 })
    console.log('ErrorLogTable', { logs, isLoading })

    if (isLoading || !Array.isArray(logs)) return <div>Loading...</div>

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Message</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {logs.map(({ id, message, createdAt }) => (
                    <tr key={`error-log-row-${id}`}>
                        <td>{id}</td>
                        <td>{message}</td>
                        <td>{createdAt.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
