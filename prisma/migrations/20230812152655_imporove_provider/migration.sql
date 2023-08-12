/*
  Warnings:

  - You are about to drop the column `providerId` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `planId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_providerId_fkey";

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "icon" TEXT;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "providerId",
ADD COLUMN     "planId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
