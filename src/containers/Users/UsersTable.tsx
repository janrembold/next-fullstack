'use client'

import { ApiGetUsersResponse } from '@/app/api/v1/users/route'
import { TableSkeleton } from '@/components/Skeletons/TableSkeleton'
import { swrFetcher } from '@/utils/swr/swrFetcher'
import { Button, Table, TableData } from '@mantine/core'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

const defaultTableData: TableData = {
    head: ['ID', 'E-Mail', 'Name', 'Roles', 'Actions'],
}

export const UsersTable = () => {
    const router = useRouter()
    const search = ''
    const take = 3
    const skip = 0

    const { data, error, isLoading } = useSWR(
        `/api/v1/users?search=${search}&take=${take}&skip=${skip}`,
        swrFetcher<ApiGetUsersResponse>,
    )

    if (isLoading) return <TableSkeleton />
    if (error) return <div>Error loading users</div>
    if (data?.users?.length === 0) return <div>No users found</div>

    const tableData: TableData = {
        ...defaultTableData,
        body: data?.users.map((user) => [
            user.id,
            user.email,
            user.name,
            user.roles.join(', '),
            <Button
                key={user.id}
                size="xs"
                variant="light"
                onClick={() => router.push(`/admin/users/${user.id}`)}
            >
                Edit
            </Button>,
        ]),
    }

    return <Table data={tableData} />
}
