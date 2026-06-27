const { Context } = require("telegraf");
const { bot } = require("../bot");
const { menuKeyboard } = require("../keyboards/menu");
const { prisma } = require("../../lib/prisma");


/**
* @param {Context} ctx
*/
async function startHandle(ctx){
    const userId = ctx.from.id;
    //prisma.

    await ctx.replyWithPhoto(
        { source: "./public/assets/joke.png" },
        { 
            caption: `👋 Привет, <b>${ctx.from.first_name}</b>
            
В этом боте ты можешь сгенерировать резюме, которое отправишь роботадателю. Переходи в меню и следуй простой инструкции. Первая попытка бесплатна`,
            reply_markup: menuKeyboard,
            parse_mode: "HTML"
        }
    );
}
bot.command("start", startHandle);