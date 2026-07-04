const { Context } = require("telegraf");
const { bot } = require("../bot");
const { consLog } = require("../../utils/consLog");
const { getResponse } = require("../../services/api/gemini");
const { editOrAnswerMessage } = require("../helpers/editOrAnswerMessage");

/**
* @param {Context} ctx
*/
async function generateResumeHandler(ctx){
    const prompt = ctx.message.text;

    let loadingMessage = await ctx.reply("Генерация резюме...");
    consLog("message", typeof loadingMessage);
    const response = await getResponse(prompt);
    if (!response) {
        await editOrAnswerMessage(
            ctx, 
            "Ошибка при получении ответа от Gemini API", 
            loadingMessage
        );
        return;
    }

    await editOrAnswerMessage(ctx, response, loadingMessage);
}
bot.on("text", generateResumeHandler);