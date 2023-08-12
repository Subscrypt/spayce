import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET(
    request: Request, params: { params: { address: string } }
) {
    console.log('params', params)
    const result = await prisma.payment.findMany({
        where: {
            user: { 
                address: params.params.address,
            },
        },
        include: {
            member: {
                include: {
                    subscription: {
                        include: {
                            plan: {
                                include: {
                                    provider: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    })

return NextResponse.json(result)
}
