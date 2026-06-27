const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error){
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
    database: database,
};


module.exports = env;