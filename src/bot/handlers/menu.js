const { Context } = require("telegraf");
const { bot } = require("../bot.js");
const { MENU_CALLBACK } = require("../../config/constants")

/**
* @param {Context} ctx
*/
async function menuHandle(ctx){
    ctx.reply(`Количество доступных резюме: ${1}
Вы можете пополнить баланс по кнопке ниже`);
    ctx.answerCbQuery();
}
bot.action(MENU_CALLBACK, menuHandle);