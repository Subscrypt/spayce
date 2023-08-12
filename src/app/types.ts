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

export type { Currency, SubscriptionStatus, SubscriptionInfo };
