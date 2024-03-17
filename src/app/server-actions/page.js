import { DemoForm } from '@/components/Forms/Demo/DemoForm'
import { auth } from '../api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation'
import { logError } from '@/utils/logError'

export default async function Page() {
    const session = await auth()
    if (!session) redirect('/')

    logError('This is a test error')

    return (
        <div>
            <h1>Server Action Demo</h1>
            <DemoForm />
        </div>
    )
}
