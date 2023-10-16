# Backend limpo

- Application developed with Bun, Elysia and Prisma

$ bunx prisma generate --schema=./src/external/prisma/schema.prisma

$ bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma

## DB container

$ podman run --name some-postgres -p 5432:5432 -e POSTGRES_USER="myuser" -e POSTGRES_DB="mydatabase" -e POSTGRES_PASSWORD="123456" -d postgres
