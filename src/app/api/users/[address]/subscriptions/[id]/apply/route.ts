import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function POST(
    request: Request, params: { params: { address: string, id: string } }
) {
    const data = { 
        user: { connect: { address: params.params.address } },
        subscription: { connect: { id: parseInt(params.params.id) } },
     };
    const result = await prisma.subscriptionMember.create({ data })

    return NextResponse.json(result)
}
