-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "discount" SET DEFAULT 0,
ALTER COLUMN "completed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "TransactionProduct" ALTER COLUMN "purchasePrice" DROP NOT NULL,
ALTER COLUMN "purchasePrice" SET DEFAULT 0,
ALTER COLUMN "sellingPrice" DROP NOT NULL,
ALTER COLUMN "sellingPrice" SET DEFAULT 0;
