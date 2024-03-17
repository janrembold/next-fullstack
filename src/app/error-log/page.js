import { Suspense } from 'react'
import { auth } from '../api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation'
import { ErrorLogContainer } from '@/containers/ErrorLog/ErrorLogContainer'

export default async function Page() {
    const session = await auth()
    if (!session) redirect('/')

    return (
        <div>
            <h1>Error Log</h1>

            <Suspense fallback={<div>Loading...</div>}>
                <ErrorLogContainer />
            </Suspense>
        </div>
    )
}
