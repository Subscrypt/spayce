import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET(
    request: Request, params: { params: { address: string } }
) {
    const result = await prisma.subscription.findMany({
        where: {
            members: {
                some: { user: { address: params.params.address } },
            },
        },
        include: { 
            members: {
                include: {
                    user: true ,
                },
            },
            plan: {
                include: { provider: true },
            },
        },
    })

    return NextResponse.json(result)
}
