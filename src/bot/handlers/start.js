const { Context } = require("telegraf");
const { bot } = require("../bot.js");


/**
* @param {Context} ctx
*/
async function startHandle(ctx){
    ctx.replyWithPhoto({ source: "./public/assets/joke.png" });
    ctx.reply("Здаров че снилось");
}
bot.command("start", startHandle);