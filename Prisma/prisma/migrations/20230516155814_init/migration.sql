/*
  Warnings:

  - You are about to drop the column `writtenPostId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_writtenPostId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "writtenPostId";
