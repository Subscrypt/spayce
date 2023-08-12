import { SubscriptionStatus } from "@/app/types";

const renderSwitch = (status: SubscriptionStatus) => {
    switch (status) {
        case undefined:
            return "Renews";
        case "active":
            return "Renews";
        case "inactive":
            return "Expired";
        case "expiring":
            return "Expires on";
    }
};

export { renderSwitch }