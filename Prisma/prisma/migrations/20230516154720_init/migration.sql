-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_writtenPostId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "writtenPostId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_writtenPostId_fkey" FOREIGN KEY ("writtenPostId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
