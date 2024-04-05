import { NextRequest } from 'next/server'
import { ZodTypeAny } from 'zod'

export const parseApiGetParams = (req: NextRequest, schema: ZodTypeAny) => {
    const { searchParams } = new URL(req.url)
    return schema.parse(searchParams)
}
