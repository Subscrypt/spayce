import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function POST(
    request: Request, params: { params: { address: string, id: string } }
) {
    const leaved_member = await prisma.subscriptionMember.deleteMany({
        where: {
            user: { address: params.params.address },
            subscription: { id: parseInt(params.params.id) },
        },
    })

    return NextResponse.json(leaved_member)
}
