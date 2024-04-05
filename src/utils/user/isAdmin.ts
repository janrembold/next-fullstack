import { Role } from '@prisma/client'

export const isAdmin = (roles: string[] | unknown = []) =>
    Array.isArray(roles) && roles.includes(Role.ADMIN)
