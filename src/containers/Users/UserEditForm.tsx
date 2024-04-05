'use client'

import { UserSchema, userSchema } from '@/schemas/userSchema'
import { useUser } from '@auth0/nextjs-auth0/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mantine/core'
import { Role, User } from '@prisma/client'
import { Form, useForm } from 'react-hook-form'
import { Checkbox, TextInput } from 'react-hook-form-mantine'
import useSWRMutation from 'swr/mutation'

interface UserEditFormProps {
    user: User
}

// TODO move to generic swrPatchFetcher method
async function updateUser(url: string, { arg }: { arg: UserSchema }) {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(arg),
    }).then((res) => res.json())
}

export const UserEditForm = ({ user }: UserEditFormProps) => {
    const { user: sessionUser } = useUser()
    const isAdmin = (sessionUser?.roles as Role[])?.includes(Role.ADMIN)

    const { trigger, isMutating, error } = useSWRMutation(
        `/api/v1/users/${user.id}`,
        updateUser,
    )
    const { control } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: user.email,
            name: user.name,
            isAdmin: isAdmin ? user.roles.includes(Role.ADMIN) : undefined,
        },
    })

    return (
        <Form
            control={control}
            onSubmit={({ data }) => trigger(data)}
            onError={(e) => console.error(e)}
        >
            <TextInput
                name="email"
                control={control}
                placeholder="E-Mail"
                label="E-Mail"
                withAsterisk
            />
            <TextInput
                name="name"
                control={control}
                placeholder="Name"
                label="Name"
                withAsterisk
            />

            {isAdmin ? (
                <Checkbox name="isAdmin" control={control} label="Admin" />
            ) : null}

            <Button disabled={isMutating} type="submit" variant="light" mt={20}>
                Speichern
            </Button>

            {error ? <div>Es ist ein Fehler aufgetreten</div> : null}
        </Form>
    )
}
