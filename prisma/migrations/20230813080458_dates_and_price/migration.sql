-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "renewalDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
