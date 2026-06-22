const { Telegraf } = require("telegraf");
const { botToken } = require("../config");


function createBot(){
    return new Telegraf(botToken);
}

module.exports = { createBot }
