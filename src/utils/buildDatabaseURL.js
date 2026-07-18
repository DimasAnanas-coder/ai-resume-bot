const { database, redis } = require("../config");
const { consLog } = require("./consLog");


/**
 * 
 * @param { Object } db 
 * @param { String } dbType 
 * @returns 
 */

function buildDatabaseURL(db, dbType) {
    if (!db.user || !db.password || !db.host || !db.port || !db.name) {
        console.error('❌ Ошибка: отсутствуют данные для подключения к БД');
        console.error('   user:', db.user || '❌');
        console.error('   host:', db.host || '❌');
        console.error('   port:', db.port || '❌');
        console.error('   name:', db.name || '❌');
        console.error('   password:', db.password ? '***' : '❌');
        throw new Error('Недостаточно данных для подключения к базе данных');
    }

    const url = `${dbType}://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}?schema=public`;
    consLog('✅ URL собран:', url.replace(/:[^:@]+@/, ':***@'));
    return url;
}

function buildRedisURL() {
    return buildDatabaseURL(redis, 'redis');
}

function buildPostgresURL() {
    return buildDatabaseURL(database, 'postgresql');
}

module.exports = { buildPostgresURL, buildRedisURL };
