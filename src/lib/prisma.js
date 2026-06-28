const { PrismaClient } = require("../../prisma/generated/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
const { buildDatabaseURL } = require("../utils/buildDatabaseURL");

const globalForPrisma = global;

/**
 * Создает клиент Prisma ORM
 * @returns {PrismaClient}
 */
function setPrisma() {
    if (!globalForPrisma.prisma) {
        const pool = new Pool({ connectionString: buildDatabaseURL() });
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
