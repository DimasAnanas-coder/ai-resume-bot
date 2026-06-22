const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error){
    console.error('❌ Ошибка загрузки .env файла:', result.error.message);
    process.exit(1);
}

const env = {
    botToken: process.env.BOT_TOKEN
};


module.exports = env;