import { Auth0Client } from '@auth0/nextjs-auth0/server'
import { NextResponse } from 'next/server'

export const auth0 = new Auth0Client({
  async onCallback(error, context, session) {
    // redirect the user to a custom error page
    if (error)
      return NextResponse.redirect(
        new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL),
      )

    console.log('Auth0 callback context:', { context, session })
    if (session?.user?.sub) {
      // create user in DB if not existing
      // await createUserIfNotExists(session.user);
    }

    // complete the redirect to the provided returnTo URL
    return NextResponse.redirect(
      new URL(context.returnTo || '/', process.env.APP_BASE_URL),
    )
  },
})
