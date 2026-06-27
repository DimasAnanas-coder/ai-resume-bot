const { PrismaClient } = require("@prisma/client");
const { database } = require("../config/");
const { consLog } = require("../utils/consLog");

function buildDatabaseURL(){
    if (!database.user || !database.password || !database.host || !database.port || !database.name) {
        console.error('❌ Ошибка: отсутствуют данные для подключения к БД');
        console.error('   user:', database.user || '❌');
        console.error('   host:', database.host || '❌');
        console.error('   port:', database.port || '❌');
        console.error('   name:', database.name || '❌');
        console.error('   password:', database.password ? '***' : '❌');
        throw new Error('Недостаточно данных для подключения к базе данных');
    }
    
    const url = `postgresql://${database.user}:${database.password}@${database.host}:${database.port}/${database.name}?schema=public`;
    consLog('✅ URL собран:', url.replace(/:[^:@]+@/, ':***@')); 
    return url;
}

const globalForPrisma = global;

/**
 * Создает клиент Призмы ORM
 * @returns { PrismaClient }
 */
function setPrisma(){
    globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();
    return globalForPrisma.prisma;
}

/**
 * Экземпляр PrismaClient для работы с базой данных
 * @type {PrismaClient}
 */
const prisma = setPrisma(); 

p

module.exports = { buildDatabaseURL, prisma };