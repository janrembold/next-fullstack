import { BackTitle } from '@/components/BackTitle/BackTitle'
import { UserEdit } from '@/containers/Users/UserEdit'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default withPageAuthRequired(
    function Page({ params }) {
        return (
            <div>
                <BackTitle href="/admin/users" title={`User #${params.id}`} />
                <UserEdit id={params.id} />
            </div>
        )
    },
    {
        returnTo({ params }) {
            return `/admin/users/${params.id}`
        },
    },
)
