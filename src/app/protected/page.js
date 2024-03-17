import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Auth0 } from '@/components/Demo/Auth0'

export default withPageAuthRequired(
    function Page() {
        return (
            <>
                <div>Protected Page with auth required</div>
                <Auth0 />
            </>
        )
    },
    { returnTo: '/' },
)
