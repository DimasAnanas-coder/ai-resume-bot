const { Context } = require('telegraf');
const { bot } = require('../bot');
const { MENU_CALLBACK, BACK_TO_MENU_CALLBACK } = require('../../config/constants');
const { mainMenuKeyboard } = require('../keyboards/mainMenu');
const { getResumeCount } = require('../../db/users');
const { menuMessage } = require('../texts/menu');

/**
* @param {Context} ctx
* @param {CallableFunction} sendFunc
*/
async function menuHandle(ctx, sendFunc){
    const resumeAvailableCount = await getResumeCount(ctx.from.id);
    await sendFunc.call(
        ctx,
        menuMessage(resumeAvailableCount),
        { reply_markup: mainMenuKeyboard },
    );
}

/**
* @param {Context} ctx
*/
async function entryToMenuHandle(ctx){
    await menuHandle(ctx, ctx.reply);
    await ctx.answerCbQuery();
}
bot.action(MENU_CALLBACK, entryToMenuHandle);


/**
* @param {Context} ctx
*/
async function backToMenuHandle(ctx){
    await menuHandle(ctx, ctx.editMessageText);
    await ctx.answerCbQuery();
}
bot.action(BACK_TO_MENU_CALLBACK, backToMenuHandle);

/**
* @param {Context} ctx
*/
async function commandMenuHandle(ctx){
    await menuHandle(ctx, ctx.reply);
}
bot.command('menu', commandMenuHandle);
