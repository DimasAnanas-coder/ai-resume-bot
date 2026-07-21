const PAYMENT_SELECT_TARIFF = 'Выберите тариф из списка ниже. Вы покупаете то количество резюме, сколько хотите. Ничего лишнего!';


function PAYMENT_PAY_LINK(tariff){
    const tariffText = tariffButtonLabel(tariff);

    return `Выбранный тариф: ${tariffText}. Оплатите по ссылке ниже. 
    
Генерации автоматически зачислятся на ваш счет`;
}

function tariffButtonLabel(tariff) {
    return `${tariff.cost}р - ${tariff.resumeCount}`;
}

module.exports = {
    PAYMENT_SELECT_TARIFF,
    PAYMENT_PAY_LINK,
    tariffButtonLabel,
};
