/*
  Warnings:

  - You are about to drop the column `productId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `orgId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_productId_fkey";

-- DropIndex
DROP INDEX "Transaction_productId_idx";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "productId",
ADD COLUMN     "orgId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Transaction_orgId_idx" ON "Transaction"("orgId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
