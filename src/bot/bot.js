const { Telegraf } = require("telegraf");
const { handlersInitialize } = require("./handlers");
const { botToken } = require("../config");

const bot = new Telegraf(botToken);

function createBot(){
    handlersInitialize();
    return bot;
}


module.exports = { createBot, bot }
