const { Context } = require("telegraf");
const { bot } = require("../bot");
const { consLog } = require("../../utils/consLog");
const { editOrAnswerMessage } = require("../helpers/editOrAnswerMessage");
const { chatWithAgent } = require("../../services/agent/chatWithagent");

/**
* @param {Context} ctx
*/
async function generateResumeHandler(ctx){
    const prompt = ctx.message.text;

    let loadingMessage = await ctx.reply("Генерация резюме...");
    consLog("message", typeof loadingMessage);
    const response = await chatWithAgent(prompt);
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