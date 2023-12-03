# Xpan Group Test

This is the proposal for the Xpand Group test solution, using technologies:

- Node
- Express
- TypeScript
- Prisma
- PostgresSql

### Project configuration

In order to run the project it is necessary to use the environment variables that define the connections to PostgreSql:

```sh
POSTGRES_URL="postgres://default:nSrH1VvT5YWl@ep-crimson-dream-50682599-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:nSrH1VvT5YWl@ep-crimson-dream-50682599-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:nSrH1VvT5YWl@ep-crimson-dream-50682599.us-east-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="ep-crimson-dream-50682599-pooler.us-east-1.postgres.vercel-storage.com"
POSTGRES_PASSWORD="nSrH1VvT5YWl"
POSTGRES_DATABASE="verceldb"
```

Once the environment variables are configured, the packages are required to be installed:

```sh
npm i  # npm
```

```sh
pnpm i  # pnpm
```

With the packages installed, all that remains is to run the project:

```sh
npm run dev  # npm
```

```sh
pnpm dev  # pnpm
```
