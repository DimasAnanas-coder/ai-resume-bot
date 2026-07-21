const { Context } = require('telegraf');
const { bot } = require('../bot');
const { menuKeyboard } = require('../keyboards/menu');
const { createNewUser } = require('../../db/users.js');
const { startWelcomeCaption } = require('../texts/start');


/**
* @param {Context} ctx
*/
async function startHandle(ctx){
    const userId = ctx.from.id;
    const firstName = ctx.from.first_name;
    await createNewUser(userId, firstName);

    await ctx.reply(
        startWelcomeCaption(firstName),
        {
            reply_markup: menuKeyboard,
            parse_mode: 'HTML',
        },
    );
}
bot.command('start', startHandle);
