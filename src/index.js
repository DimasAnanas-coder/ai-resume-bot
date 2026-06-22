const { createBot } = require("./bot/bot.js");
const { consLog } = require("./utils/consLog.js");

bot = createBot();
consLog("Бот успешно собран");

bot.launch()
consLog("Бот успешно запущен");