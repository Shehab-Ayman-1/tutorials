/*
  Warnings:

  - You are about to drop the column `userId` on the `UserPrefrence` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPrefrenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserPrefrence" DROP CONSTRAINT "UserPrefrence_userId_fkey";

-- DropIndex
DROP INDEX "UserPrefrence_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPrefrenceId" TEXT;

-- AlterTable
ALTER TABLE "UserPrefrence" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPrefrenceId_key" ON "User"("userPrefrenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPrefrenceId_fkey" FOREIGN KEY ("userPrefrenceId") REFERENCES "UserPrefrence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
