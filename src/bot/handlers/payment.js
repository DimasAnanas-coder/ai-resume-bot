const { Context } = require("telegraf");
const { bot } = require("../bot");
const { PAYMENT_CALLBACK, PAY_CHOOSEN_TARIFF_CALLBACK, PRICES, findTariff } = require("../../config/constants")
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


function parseTariff(ctx) {
    const cbData = ctx.callbackQuery.data;
    const tariffId = cbData.split(":")[1];
    consLog(`ID тарифа: ${tariffId}`);

    return findTariff(tariffId);
}

/**
* @param {Context} ctx
*/
async function payChoosenTarifHandler(ctx){
    const tariff = parseTariff(ctx);
    if (!tariff) {
        consLog("Данный тариф не существует", ctx.callbackQuery.data);
        await ctx.answerCbQuery();
        return;
    }

    await ctx.editMessageText(
        PAYMENT_PAY_LINK(tariff),
        { reply_markup: payChoosenTariffKeyboard(tariff) }
    );

    await ctx.answerCbQuery();
}
PRICES.forEach(tariff => {
    bot.action(`${PAY_CHOOSEN_TARIFF_CALLBACK}:${tariff.id}`, payChoosenTarifHandler);
});