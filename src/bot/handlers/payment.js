const { Context } = require("telegraf");
const { bot } = require("../bot");
const { PAYMENT_CALLBACK, PAY_CHOOSEN_TARIFF_CALLBACK, PRICES } = require("../../config/constants")
const { buildPricesKeyboard, payChoosenTariffKeyboard } = require("../keyboards/payment");
const { consLog } = require("../../utils/consLog");
const { PAYMENT_SELECT_TARIFF, PAYMENT_PAY_LINK } = require("../texts/payment");

/**
* @param {Context} ctx
*/
async function paymentMenuHandler(ctx){
    await ctx.editMessageText(
        PAYMENT_SELECT_TARIFF,
        { reply_markup: buildPricesKeyboard() }
    );

    await ctx.answerCbQuery();
}
bot.action(PAYMENT_CALLBACK, paymentMenuHandler);


/**
* @param {Context} ctx
*/
async function payChoosenTarifHandler(ctx){
    const cbData = ":4"; //ctx.callbackQuery.data;
    const tariffId = cbData.split(":")[1];
    consLog(tariffId);

    await ctx.editMessageText(
        PAYMENT_PAY_LINK,
        { reply_markup: payChoosenTariffKeyboard(tariffId) }
    );

    await ctx.answerCbQuery();
}

//bot.action((ctx) => {ctx.callbackQuery.data.startsWith()}, payChoosenTarifHandler);

for (let i = 0; i < PRICES.length; i ++){
    bot.action(`${PAY_CHOOSEN_TARIFF_CALLBACK}:${i}`, payChoosenTarifHandler);
}