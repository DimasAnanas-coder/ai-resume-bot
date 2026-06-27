const { Context } = require("telegraf");
const { bot } = require("../bot");
const { PAYMENT_CALLBACK, PAY_CHOOSEN_TARIFF_CALLBACK, PRICES } = require("../../config/constants")
const { buildPricesKeyboard, payChoosenTariffKeyboard } = require("../keyboards/payment");
const { consLog } = require("../../utils/consLog");

/**
* @param {Context} ctx
*/
async function paymentMenuHandler(ctx){
    await ctx.editMessageText(
        "Выберите тариф из списка ниже. Вы покупаете то количество резюме, сколько хотите. Ничего лишнего!",
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
        "Оплатите по ссылке ниже. Генерации автоматически зачислятся на ваш счет",
        { reply_markup: payChoosenTariffKeyboard(tariffId) }
    );

    await ctx.answerCbQuery();
}

//bot.action((ctx) => {ctx.callbackQuery.data.startsWith()}, payChoosenTarifHandler);

for (let i = 0; i < PRICES.length; i ++){
    bot.action(`${PAY_CHOOSEN_TARIFF_CALLBACK}:${i}`, payChoosenTarifHandler);
}