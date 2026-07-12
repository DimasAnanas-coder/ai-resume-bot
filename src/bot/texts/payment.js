const PAYMENT_SELECT_TARIFF = "Выберите тариф из списка ниже. Вы покупаете то количество резюме, сколько хотите. Ничего лишнего!";
const PAYMENT_PAY_LINK = "Оплатите по ссылке ниже. Генерации автоматически зачислятся на ваш счет";

function tariffButtonLabel(cost, resumeCount) {
    return `${cost}р - ${resumeCount}`;
}

module.exports = {
    PAYMENT_SELECT_TARIFF,
    PAYMENT_PAY_LINK,
    tariffButtonLabel,
};
