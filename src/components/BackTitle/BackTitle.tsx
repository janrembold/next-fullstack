'use client'

import { Button, Flex } from '@mantine/core'
import { useRouter } from 'next/navigation'

interface BackTitleProps {
    title: string
    href: string
}

export const BackTitle = ({ title, href }: BackTitleProps) => {
    const router = useRouter()

    return (
        <Flex justify="flex-start" align="center" gap="md">
            <Button onClick={() => router.push(href)}>&lt; Back</Button>
            <h1>{title}</h1>
        </Flex>
    )
}
