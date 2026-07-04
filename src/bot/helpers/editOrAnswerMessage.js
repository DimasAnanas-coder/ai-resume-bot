const { Context } = require("telegraf");
const { Message } = require("telegraf/types");
const { consLog } = require("../../utils/consLog");

/**
* @param {Context} ctx
* @param {string} messageText
* @param {Message} oldMessage
* @returns {Message}
*/
async function editOrAnswerMessage(
    ctx, 
    messageText, 
    oldMessage, 
    ...args
){
    let newMessage = oldMessage;
    try {
        if (oldMessage) {
            await ctx.telegram.editMessageText(
                oldMessage.chat.id,
                oldMessage.message_id,
                undefined,
                messageText,
                ...args
            );
        } else {
            newMessage = await ctx.reply(messageText, ...args);
        }
    } catch (error) {
        consLog("Ошибка при редактировании или ответе сообщения", error);
        newMessage = await ctx.reply(messageText, ...args);
    }
    return newMessage;
}

module.exports = { editOrAnswerMessage };