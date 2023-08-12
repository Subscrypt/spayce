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
    const allPayments = subscription.members.flatMap((member:any) => member.payments);
    subscription.payments = allPayments;
    return subscription;
};

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

    return NextResponse.json(subscription_with_payments)
}
