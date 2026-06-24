const { Context } = require("telegraf");
const { bot } = require("../bot");
const { GENERATE_RESUME_CALLBACK } = require("../../config/constants")

/**
* @param {Context} ctx
*/
async function generateResumeHandler(ctx){
    await ctx.reply(
        `Для создания резюме просто отправьте в чат всю информацию о себе в произвольном виде одним сообщением.

<b>Рекомендуем затронуть следующие темы:</b>
- Сколько вам лет
- Есть ли у вас высшее образование
- Желаемая должность
- Ваш стек, ЯП
- Предыдущие места работы, опыт работы`,
    {
        parse_mode: "HTML"
    })
}
bot.action(GENERATE_RESUME_CALLBACK, generateResumeHandler);