/*
  Warnings:

  - A unique constraint covering the columns `[orgId,email]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Profile_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "Profile_orgId_email_key" ON "Profile"("orgId", "email");
