-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userNumber" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "roles" "Role" NOT NULL DEFAULT 'BASIC',
    "skills" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPrefrence" (
    "id" TEXT NOT NULL,
    "emailUpdated" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserPrefrence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "writtenPostId" TEXT NOT NULL,
    "favPostId" TEXT,
    "catagoryId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catagory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Catagory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_age_key" ON "User"("name", "age");

-- CreateIndex
CREATE UNIQUE INDEX "UserPrefrence_userId_key" ON "UserPrefrence"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Catagory_name_key" ON "Catagory"("name");

-- AddForeignKey
ALTER TABLE "UserPrefrence" ADD CONSTRAINT "UserPrefrence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_writtenPostId_fkey" FOREIGN KEY ("writtenPostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_favPostId_fkey" FOREIGN KEY ("favPostId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
