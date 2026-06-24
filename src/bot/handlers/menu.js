const { Context } = require("telegraf");
const { bot } = require("../bot.js");
const { MENU_CALLBACK, BACK_TO_MENU_CALLBACK } = require("../../config/constants")
const { mainMenuKeyboard } = require("../keyboards/mainMenu.js")

/**
* @param {Context} ctx
* @param {CallableFunction} sendFunc
*/
async function menuHandle(ctx, sendFunc){
    const resumeAvailableCount = 1;
    await sendFunc.call(
        ctx, 
        `Количество доступных резюме: ${resumeAvailableCount}
Вы можете пополнить баланс по кнопке ниже`,
        { reply_markup: mainMenuKeyboard }
    );
    await ctx.answerCbQuery();
}

/**
* @param {Context} ctx
*/
async function entryToMenuHandle(ctx){
    await menuHandle(ctx, ctx.reply);
}
bot.action(MENU_CALLBACK, entryToMenuHandle);


/**
* @param {Context} ctx
*/
async function backToMenuHandle(ctx){
    await menuHandle(ctx, ctx.editMessageText);
}
bot.action(BACK_TO_MENU_CALLBACK, backToMenuHandle);