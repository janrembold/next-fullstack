import { z } from 'zod'

export const userSchema = z.object({
    email: z.string().email('Invalid email'),
    name: z.string().min(2, 'Too short').max(100, 'Too long'),
    isAdmin: z.boolean().optional(),
})

export type UserSchema = z.infer<typeof userSchema>
