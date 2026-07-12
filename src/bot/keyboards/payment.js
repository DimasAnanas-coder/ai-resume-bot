const { PRICES, PAYMENT_CALLBACK, PAY_CHOOSEN_TARIFF_CALLBACK } = require("../../config/constants");
const { backToMenuRow } = require("./menu")
const { tariffButtonLabel } = require("../texts/payment");
const { BUTTON_PAY, BUTTON_BACK_TO_TARIFFS } = require("../texts/buttons");

function buildPricesKeyboard() {
    let buttons = [];
    for (const [index, priceObj] of PRICES.entries()){
        const button = {
            text: tariffButtonLabel(priceObj.cost, priceObj.resumeCount),
            callback_data: `${PAY_CHOOSEN_TARIFF_CALLBACK}:${index}`
        };
        if (!(index % 2)){
            buttons.push([button]);
        } else{
            buttons.last.push(button);
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
                { text: BUTTON_PAY, url: payUrl }
            ],
            [
                { text: BUTTON_BACK_TO_TARIFFS, callback_data: PAYMENT_CALLBACK}
            ]
        ]
    }
}

module.exports = { buildPricesKeyboard, payChoosenTariffKeyboard }
