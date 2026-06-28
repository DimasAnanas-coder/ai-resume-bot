const { Context } = require("telegraf");
const { bot } = require("../bot");
const { menuKeyboard } = require("../keyboards/menu");
const { createNewUser } = require("../../db/users.js")


/**
* @param {Context} ctx
*/
async function startHandle(ctx){
    const userId = ctx.from.id;
    const firstName = ctx.from.first_name;
    await createNewUser(userId, firstName, 1);

    await ctx.replyWithPhoto(
        { source: "./public/assets/joke.png" },
        { 
            caption: `👋 Привет, <b>${firstName}</b>
            
В этом боте ты можешь сгенерировать резюме, которое отправишь роботадателю. Переходи в меню и следуй простой инструкции. Первая попытка бесплатна`,
            reply_markup: menuKeyboard,
            parse_mode: "HTML"
        }
    );
}
bot.command("start", startHandle);