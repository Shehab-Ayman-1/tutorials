# Install Prisma

-   npm i prisma typescript ts-node @types/node nodemon

# Install Prisma Environment

-   npx prisma init --datasource-provider postgresql

# Build Schema Table

-   npx prisma migrate dev --name init && npx prisma generate

# Install Prisma Client For Client Project

-   npm i @prisma/client
