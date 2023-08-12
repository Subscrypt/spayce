import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET() {
    const result = await prisma.subscription.findMany({
        include: { 
            members: {
                include: {
                    user: true,
                },
            },
            plan: {
                include: { provider: true },
            },
        },
    })

    return NextResponse.json(result)
}
