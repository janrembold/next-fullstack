import { Skeleton } from '@mantine/core'

export const FormSkeleton = () => {
    return (
        <>
            <Skeleton height={20} mt={20} />
            <Skeleton height={20} mt={12} />
            <Skeleton height={20} mt={12} />
            <Skeleton height={20} mt={12} width="30%" />
        </>
    )
}
