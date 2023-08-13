import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

type Member = {
    id: number;
    createdAt: string;
    accepted: boolean;
    userId: number;
    subscriptionId: number;
    user: any;
    payments: any[];
};

type Plan = {
    id: number;
    name: string;
    max_users: number;
    providerId: number;
    provider: {
        id: number;
        name: string;
        address: string;
        icon: any;
    }
}

type Subscription = {
    id: number;
    address: string;
    planId: number;
    members: Member[];
    plan: Plan;
    payments?: any[]; // optional payments field on root
};

const combinePayments = (subscription: any): Subscription => {
    const allPayments = subscription.members.flatMap((member: any) => member.payments);
    subscription.payments = allPayments;
    return subscription;
};

// Function to add placeholder members
const addPlaceholderMembers = (subscription: any): Subscription[] => {
    const currentMembersCount = subscription.members.length;
    const placeholdersToAdd = subscription.plan.max_users - currentMembersCount;

    for (let i = 0; i < placeholdersToAdd; i++) {
        subscription.members.push({
            id: -1, // Indicate it's a placeholder with a negative id
            createdAt: new Date().toISOString(),
            accepted: false,
            userId: -1, // Indicate it's a placeholder with a negative id
            subscriptionId: subscription.id,
            user: {
                id: -1, // Indicate it's a placeholder with a negative id
                name: 'Empty slot',
                address: ''
            }
        });
    }
    return subscription;
}


export async function GET(
    request: Request, params: { params: { id: string } }
) {
    let subscription = await prisma.subscription.findFirst({
        where: { id: parseInt(params.params.id) },
        include: {
            members: {
                include: {
                    user: true,
                    payments: true,
                },
            },
            plan: {
                include: { provider: true },
            },
        },
    })

    let subscription_with_payments = combinePayments(subscription);
    let subscriptions_with_placeholders = addPlaceholderMembers(subscription_with_payments);

    return NextResponse.json(subscriptions_with_placeholders)
}
