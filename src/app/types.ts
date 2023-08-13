type Currency = "ETH" | "USDT" | "USDC";
type SubscriptionStatus = "active" | "inactive" | "expiring" | undefined;

interface SubscriptionInfo {
    icon?: string;
    name: string;
    description: string;
    price: number;
    coin?: Currency;
    renewalDate: string;
    status?: SubscriptionStatus;
}

export interface User {
    id: number;
    name?: string | null;
    avatar?: string | null;
    address: string;
    payments: Payment[];
    memberships: SubscriptionMember[];
}

export interface Provider {
    id: number;
    name: string;
    address: string;
    icon?: string | null;
    plans: Plan[];
}

export interface Plan {
    id: number;
    name: string;
    max_users?: number | null;
    provider: Provider;
    providerId: number;
    subscriptions: Subscription[];
    renewal_date: string;
    price: number;
}

export interface Subscription {
    id: number;
    address?: string | null;
    plan: Plan;
    planId: number;
    members: SubscriptionMember[];
    created_at: string;
}

export interface SubscriptionMember {
    id: number;
    createdAt: Date;
    accepted: boolean;
    user: User;
    userId: number;
    subscription: Subscription;
    subscriptionId: number;
    payments: Payment[];
}

export interface Payment {
    id: number;
    amount: number;
    createdAt: Date;
    user?: User | null;
    userId?: number | null;
    member?: SubscriptionMember | null;
    subscriptionMemberId?: number | null;
}
export type { Currency, SubscriptionStatus, SubscriptionInfo };
