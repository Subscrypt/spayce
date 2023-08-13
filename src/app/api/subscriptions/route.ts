import { NextResponse, NextRequest } from 'next/server'
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

export async function POST(request: NextRequest) {
    const { planId, userId } = await request.json()
    const data = {
        plan: {
            connect: {
                id: parseInt(planId),
            }
        },
        members: {
            create: {
                user: { connect: { id: parseInt(userId) } },
            },
        },
    }
    const subscription = await prisma.subscription.create({ data })
    return NextResponse.json(subscription)
}
