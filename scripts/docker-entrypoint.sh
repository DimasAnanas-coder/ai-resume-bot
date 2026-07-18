#!/bin/sh
set -e

echo "==> Generating Prisma Client..."
npx prisma generate

echo "==> Applying database schema..."
npx prisma db push

echo "==> Starting bot..."
npm start
