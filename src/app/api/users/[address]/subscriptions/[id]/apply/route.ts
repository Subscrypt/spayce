import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'
import { deploySafe } from "@/app/utils/safe/protocol-kit/deploy-safe";


export async function POST(
    request: Request, params: { params: { address: string, id: string } }
) {
    console.log("params", params)

    // Get the owners from the database
    const owners = await prisma.user.findMany({
        where: {
            memberships: { some: { subscriptionId: parseInt(params.params.id) } },
        },
    });
    const owner_addresses = owners.map((owner) => owner.address);
    console.log("owners", owners)
    console.log("owner_addresses", owner_addresses)

    // Check if the user is already a member
    let added_member: any
    if (!owner_addresses.includes(params.params.address)) {
        const data = {
            user: { connect: { address: params.params.address } },
            subscription: { connect: { id: parseInt(params.params.id) } },
        };
        console.log("Creating a new subscription member")
        added_member = await prisma.subscriptionMember.create({ data })
        console.log("added_member", added_member)
    }
    else {
        console.log("User is already a member")
        return NextResponse.json({ error: "User is already a member" })
    }

    // If it's a last user, deploy the safe wallet
    console.log("Checking if it's the last user")

    // Get plan data for subscription
    const subscription = await prisma.subscription.findUnique({
        where: { id: added_member.subscriptionId },
        include: { plan: true },
    });
    console.log("plan", subscription.plan)

    const max_users = subscription.plan.max_users
    if (owners.length + 1 === max_users) {
        console.log("It's the last user, deploying the safe wallet")
        const safe_owners = [process.env.DEPLOYER_ADDRESS || "", params.params.address, ...owner_addresses]
        console.log("safe_owners", safe_owners)

        const config = {
            RPC_URL: process.env.BASE_RPC_URL || "",
            DEPLOYER_ADDRESS_PRIVATE_KEY: process.env.DEPLOYER_ADDRESS_PRIVATE_KEY || "",
            DEPLOY_SAFE: {
                // TODO: Get the owners from the database
                OWNERS: safe_owners,
                THRESHOLD: max_users,
                SALT_NONCE: '0'
            }
        }
        const safeAddress = await deploySafe(config)
        console.log("safeAddress", safeAddress)

        // Add the safeAddress to the subscription in the database
        console.log("Adding the safeAddress to the subscription in the database")
        const subscription = await prisma.subscription.update({
            where: { id: added_member.subscriptionId },
            data: { address: safeAddress },
        });
        console.log("Address updated", subscription)
    }

    return NextResponse.json(added_member)
}
