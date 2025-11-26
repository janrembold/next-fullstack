import { Auth0Client } from '@auth0/nextjs-auth0/server'
import { NextResponse } from 'next/server'
import { createUserIfNotExists } from './db/users/createUserIfNotExists'

export const auth0 = new Auth0Client({
  async onCallback(error, context, session) {
    // TODO: redirect the user to a custom error page
    if (error)
      return NextResponse.redirect(
        new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL),
      )

    if (session?.user?.sub) {
      console.log('Auth0 session user:', session.user)

      try {
        await createUserIfNotExists(session.user)
      } catch (dbError) {
        console.error('Error creating user in DB:', dbError)
        return NextResponse.redirect(
          new URL(`/error`, process.env.APP_BASE_URL),
        )
      }
    }

    // complete the redirect to the provided returnTo URL
    return NextResponse.redirect(
      new URL(context.returnTo || '/', process.env.APP_BASE_URL),
    )
  },
})
