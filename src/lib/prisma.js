const { PrismaClient } = require('../../prisma/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const { postgres } = require('../config');

const globalForPrisma = global;

/**
 * Создает клиент Prisma ORM
 * @returns {PrismaClient}
 */
function setPrisma() {
    if (!globalForPrisma.prisma) {
        const pool = new Pool({ connectionString: postgres.url });
        const adapter = new PrismaPg(pool);
        globalForPrisma.prisma = new PrismaClient({ adapter });
    }
    return globalForPrisma.prisma;
}

/**
 * Экземпляр PrismaClient для работы с базой данных
 * @type {PrismaClient}
 */
const prisma = setPrisma();

module.exports = { prisma };
