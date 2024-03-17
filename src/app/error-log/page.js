import { Suspense } from 'react'
import { ErrorLogContainer } from '@/containers/ErrorLog/ErrorLogContainer'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default withPageAuthRequired(
    function Page() {
        return (
            <>
                <h1>Error Log</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorLogContainer />
                </Suspense>
            </>
        )
    },
    { returnTo: '/' },
)
