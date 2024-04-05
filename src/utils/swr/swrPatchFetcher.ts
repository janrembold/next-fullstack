class FetchError extends Error {
    info: any
    status?: number
}

export const swrPatchFetcher = async <T>(
    ...args: Parameters<typeof fetch>
): Promise<T> => {
    const res = await fetch(...args)

    if (!res.ok) {
        const error = new FetchError(
            'An error occurred while fetching the data.',
        )
        error.info = await res.json()
        error.status = res.status
        throw error
    }

    return res.json()
}
