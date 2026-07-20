const Tariff = require("../../models/Tariff");
const { consLog } = require("../../utils/consLog");

const PRICES = [
    new Tariff(99, 2),
    new Tariff(290, 7),
    new Tariff(490, 12),
    new Tariff(790, 18),
    new Tariff(990, 22),
    new Tariff(1290, 30),
]

const DEFAULT_RESUME_COUNT = 1

/**
 * Функия для получения тарифа по его ID
 * @param { Number } id 
 * @returns { Tariff? }
 */
function findTariff(id) {
    consLog(id);
    for (const tariff of PRICES) {
        consLog(tariff.id);
        if (tariff.id.toString() === id.toString()) {
            return tariff;
        }
    }
    return null;
}

module.exports = {PRICES, DEFAULT_RESUME_COUNT, findTariff}