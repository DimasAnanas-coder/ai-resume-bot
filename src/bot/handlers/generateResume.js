const { Context } = require("telegraf");
const { bot } = require("../bot");
const { GENERATE_RESUME_CALLBACK } = require("../../config/constants")
const { GENERATE_RESUME_INSTRUCTION } = require("../texts/generateResume");

/**
* @param {Context} ctx
*/
async function generateResumeHandler(ctx){
    await ctx.reply(
        GENERATE_RESUME_INSTRUCTION,
    {
        parse_mode: "HTML"
    })

    await ctx.answerCbQuery();
}
bot.action(GENERATE_RESUME_CALLBACK, generateResumeHandler);