import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/app/db'


export async function GET(
    request: Request, params: { params: { address: string } }
) {
    // Use upsert as fingOrCreate:
    // https://stackoverflow.com/a/71524587
    const user = await prisma.user.upsert({
        where: {
          address: params.params.address,
        },
        update: {},
        create: {
          address: params.params.address,
        },
      })

    return NextResponse.json(user)
}
