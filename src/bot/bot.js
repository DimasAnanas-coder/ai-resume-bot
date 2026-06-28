const { Telegraf } = require("telegraf");
const { handlersInitialize } = require("./handlers");
const { botToken } = require("../config");

const globalForBot = global;

function createBot(){
    if (!globalForBot.bot){
        globalForBot.bot = new Telegraf(botToken);
    }
    module.exports.bot = globalForBot.bot
    handlersInitialize();
    return globalForBot.bot;
}

module.exports = { createBot } 