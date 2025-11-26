import { auth0 } from '@/lib/auth0'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const session = await auth0.getSession()

    // add protection logic as needed
    if (!session)
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    return NextResponse.json(session?.user)
}
