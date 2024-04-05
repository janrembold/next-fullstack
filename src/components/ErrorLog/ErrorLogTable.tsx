'use client'

import { useErrorLog } from '@/hooks/useErrorLog'
import { ErrorLog } from '@prisma/client'

interface ErrorLogTableProps {
    data: ErrorLog[]
}

export const ErrorLogTable = ({ data }: ErrorLogTableProps) => {
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
                {data.map(({ id, message, createdAt }) => (
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
