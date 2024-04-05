import { UsersTable } from '@/containers/Users/UsersTable'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default withPageAuthRequired(
    function Page() {
        return (
            <div>
                <h1>Users</h1>
                <UsersTable />
            </div>
        )
    },
    { returnTo: '/admin/users' },
)
