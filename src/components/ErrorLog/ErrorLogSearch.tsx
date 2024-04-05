'use client'

import { Button } from '@mantine/core'

interface ErrorLogSearchProps {
    update: (value: number) => void
    takeState: number
}

export const ErrorLogSearch = ({ update, takeState }: ErrorLogSearchProps) => {
    const handleMinus = () => {
        update(takeState - 1)
    }

    const handlePlus = () => {
        update(takeState + 1)
    }

    return (
        <>
            <div>
                <Button onClick={handleMinus}>- 1</Button>{' '}
                <Button onClick={handlePlus}>+ 1</Button>
            </div>
            <div>Take: {takeState}</div>
        </>
    )
}
