import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

// Define TypeScript interfaces
interface User {
    id: number;
    name: string;
    address: string;
}

interface Member {
    id: number;
    createdAt: string;
    accepted: boolean;
    userId: number;
    subscriptionId: number;
    user: User;
}

interface Provider {
    id: number;
    name: string;
    address: string;
    icon: null | string;
}

interface Plan {
    id: number;
    name: string;
    max_users: number;
    providerId: number;
    provider: Provider;
}

interface Subscription {
    id: number;
    address: string | null;
    planId: number;
    members: Member[];
    plan: Plan;
}

// Function to add placeholder members
const addPlaceholderMembers = (data: any): Subscription[] => {
    for (const subscription of data) {
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
    }
    return data;
}


export async function GET(
    request: Request, params: { params: { address: string } }
) {
    const subscriptions = await prisma.subscription.findMany({
        where: {
            members: {
                some: { user: { address: params.params.address } },
            },
        },
        include: { 
            members: {
                include: {
                    user: true ,
                },
            },
            plan: {
                include: { provider: true },
            },
        },
    })

    const subscriptions_with_placeholder_members = addPlaceholderMembers(subscriptions);
    return NextResponse.json(subscriptions_with_placeholder_members)
}
