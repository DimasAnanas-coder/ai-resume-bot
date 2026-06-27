const { PRICES, PAYMENT_CALLBACK, PAY_CHOOSEN_TARIFF_CALLBACK } = require("../../config/constants");
const { consLog } = require("../../utils/consLog");
const { backToMenuRow } = require("./menu")

function buildPricesKeyboard() {
    let buttons = [];
    for (const [index, priceObj] of PRICES.entries()){
        const button = {text: `${priceObj.cost}р - ${priceObj.resumeCount}`, callback_data: `${PAY_CHOOSEN_TARIFF_CALLBACK}:${index}`};
        if (!(index % 2)){
            buttons.push([button]);
        } else{
            buttons.last().push(button);
        }
    }

    return {
        inline_keyboard: [
            ...buttons,
            backToMenuRow
        ]
    }
}

function payChoosenTariffKeyboard(tariffId) {
    const payUrl = "https://youtube.com";
    return {
        inline_keyboard: [
            [
                { text: "Перейти к оплате", url: payUrl }
            ],
            [
                { text: "< Вернуться к тарифам", callback_data: PAYMENT_CALLBACK}
            ]
        ]
    }
}

module.exports = { buildPricesKeyboard, payChoosenTariffKeyboard }