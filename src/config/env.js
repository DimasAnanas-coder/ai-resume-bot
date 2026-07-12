const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error && result.error.code !== 'ENOENT') {
    console.error('❌ Ошибка загрузки .env файла:', result.error.message);
    process.exit(1);
}

const database = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
}

const env = {
    botToken: process.env.BOT_TOKEN,
    geminiApiKey: process.env.GEMINI_API_KEY,
    database: database,
    superAdminIds: process.env.SUPER_ADMIN_IDS
        ?.split(",")
        .map((id) => id.trim()),
};


module.exports = env;