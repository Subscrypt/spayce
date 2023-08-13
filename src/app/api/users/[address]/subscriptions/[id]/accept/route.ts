import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function POST(
    request: Request, params: { params: { address: string, id: string } }
) {
    console.log("Accepting subscription member")
    const accepted_member = await prisma.subscriptionMember.updateMany({
        where: {
            user: { address: params.params.address },
            subscription: { id: parseInt(params.params.id) },
        },
        data: { accepted: true },
    })

    console.log("Accepted subscription member", accepted_member)

    // Check if all members are accepted
    const members = await prisma.subscriptionMember.findMany({
        where: {
            subscription: { id: parseInt(params.params.id) },
        },
        include: {
            user: true,
            subscription: { include: { plan: true } },
        },
    })

    console.log("Members", members)

    const all_accepted = members.every((member) => member.accepted)

    console.log("All accepted", all_accepted)

    if (!all_accepted) {
        // Generate payments
        console.log("Generating payments")
        const data = members.map((member) => ({
            userId: member.user.id,
            subscriptionMemberId: member.id,
            amount: (member.subscription.plan.price as number) / members.length,
        }))
        console.log("Generated payments data", data)

        const payments = await prisma.payment.createMany({
            data,
        })
        console.log("Generated payments", payments)
    }

    return NextResponse.json(accepted_member)
}
