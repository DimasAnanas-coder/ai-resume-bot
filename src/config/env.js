const Database = require('../models/Database');

const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error && result.error.code !== 'ENOENT') {
    console.error('❌ Ошибка загрузки .env файла:', result.error.message);
    process.exit(1);
}

const postgres = new Database({
    dbType: 'postgres',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

const redis = new Database({
    dbType: 'redis',
    user: process.env.REDIS_DB_USER,
    password: process.env.REDIS_DB_PASSWORD,
    name: process.env.REDIS_DB_NAME,
    host: process.env.REDIS_DB_HOST,
    port: process.env.REDIS_DB_PORT,
});

const env = {
    botToken: process.env.BOT_TOKEN,
    geminiApiKey: process.env.GEMINI_API_KEY,
    postgres,
    redis,
    superAdminIds: process.env.SUPER_ADMIN_IDS
        ?.split(',')
        .map((id) => id.trim()),
};


module.exports = env;
