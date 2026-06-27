const { createBot } = require("./bot/bot.js");
const { consLog } = require("./utils/consLog.js");

function main(){
    require("./utils/protypesFunctions");
    consLog("Прототипированные утилиты классов успешно применены");

    bot = createBot();
    consLog("Бот успешно собран");

    bot.launch()
    consLog("Бот успешно запущен");
}

main();