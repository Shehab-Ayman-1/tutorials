# Install Prisma

-  npx prisma init
-  npm i prisma typescript ts-node @types/node nodemon
-  npm i @prisma/client

# Build Schema Table

-  npx prisma migrate dev --name init && npx prisma generate <!-- Migrate The Current Tables With The New Model Tables -->
-  npx prisma db push && npx prisma generate <!-- Delete The Previous Tables, And Regenerate New Tables With The New Models -->
