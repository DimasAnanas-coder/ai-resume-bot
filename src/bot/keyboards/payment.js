const { PRICES, PAYMENT_CALLBACK } = require("../../config/constants")
const { backToMenuRow } = require("./menu")

function buildPricesKeyboard() {
    let buttons = [];
    for (const index of PRICES){
        const priceObj = PRICES[index];
        const button = {text: `${obj.cost}р - ${obj.resumeCount}`, callback_data: `payTariff:${index}`};
        if (buttonsCount % 2){
            buttons.push([button]);
        } else{
            buttons.last.push(button);
        }
    }
    return {
        inline_keyboard: [
            buttons,
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