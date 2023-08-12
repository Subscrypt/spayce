import { NextResponse } from 'next/server'
import {prisma} from '@/app/db'

export async function GET() {
  const result = await prisma.plan.findMany({
    include: { provider: true },
  })

  return NextResponse.json(result)
}
