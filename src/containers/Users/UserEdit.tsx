'use client'

import { FormSkeleton } from '@/components/Skeletons/FormSkeleton'
import { swrFetcher } from '@/utils/swr/swrFetcher'
import { Paper } from '@mantine/core'
import { User } from '@prisma/client'
import useSWR from 'swr'
import { UserEditForm } from './UserEditForm'

interface UserEditProps {
    id: string
}

export const UserEdit = ({ id }: UserEditProps) => {
    const { data, error, isLoading } = useSWR(
        `/api/v1/users/${id}`,
        swrFetcher<User>,
    )

    if (isLoading) return <FormSkeleton />
    if (error) return <div>Error loading user</div>
    if (!data) return <div>No user found</div>

    return (
        <>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <UserEditForm user={data} />
            </Paper>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}
