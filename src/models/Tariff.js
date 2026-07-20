const hash = require('../utils/hash');

class Tariff {
    #id;

    /**
     *
     * @param { Number } cost
     * @param { Number } resumeCount
     */
    constructor(cost, resumeCount) {
        this.cost = cost;
        this.resumeCount = resumeCount;
        this.#id = this.#buildId({ cost, resumeCount });
    }

    /**
     * Хэширует объект, состоящий из всех аргументов, принимаемых классом.
     * Данный хэш становится уникальным ID тарифа
     * @param { Object } obj
     * @returns
     */
    #buildId(obj) {
        return hash(JSON.stringify(obj));
    }

    get id() {
        return this.#id;
    }
}

module.exports = Tariff;
