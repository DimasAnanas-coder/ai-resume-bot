const redis = require('redis');
const { buildRedisURL } = require('../utils/buildDatabaseURL');
const { consLog } = require('../utils/consLog');
const delay = require('../utils/delay');
const BaseCacheModel = require('../models/cache/BaseCacheModel');

const COUNT_ATTEMPT_CONNECT = 3
const TIME_SLEEP_ATTEMPT_CONNECT_MS = 2000

class Cache {
    static _instance = null;
    name = 'Редис';

    client = null;
    connected = false;

    constructor() {
        if (Cache._instance) {
            return Cache._instance;
        }
        Cache._instance = this;

        consLog(`Пытаюсь создать ${this.name} клиент...`);
        try {
            this.client = redis.createClient({
                url: buildRedisURL(),
            });
            consLog(`✅ ${this.name} клиент создан`);
        } catch (error) {
            consLog(`❌ Ошибка при создании ${this.name} клиента: ${error}`);
            throw error;
        }

        return this;
    };

    async connect() {
        if (this.connected) {
            return;
        }

        for (let i = 1; i <= COUNT_ATTEMPT_CONNECT; i++) {
            try {
                consLog(`Пытаюсь ${i} раз подключиться к ${this.name}...`);
                await this.client.connect();
                this.connected = true;
                break;
            } catch(error) {
                consLog("❌ Ошибка при подключении", error);
                await delay(TIME_SLEEP_ATTEMPT_CONNECT_MS);
            }
        }

        if (!this.connected){
            throw new Error(`Ошибка при подключении к ${this.name}`)
        }
        consLog(`✅ Подключено к ${this.name}`);
    }

    /**
     * 
     * @param { BaseCacheModel } model 
     * @returns { String }
     */
    buildKey(model) {
        return `${model.name}:${model.id}`
    }

    #serialize(value) {
        return JSON.stringify(value, (key, val) => {
            if (typeof val === "bigint"){
                val = Number(val);
            }
            return val;
        });
    }

    #deserealize(value) {
        if (!value){
            return null;
        }

        try {
            return JSON.parse(value);
        } catch (error){
            consLog("❌ Ошибка при десериализации закешированных данных", value);
            return null;
        }
    }

    /**
     * 
     * @param { BaseCacheModel } model 
     * @param { Any } value 
     * @param { Number } ttl 
     */
    async add(model, value, ttl = 0) {
        if (!this.connected) {
            await this.connect();
        }

        const key = this.buildKey(model);
        const serializeValue = this.#serialize(value);

        if (ttl > 0) {
            await this.client.set(key, serializeValue, { EX: ttl });
        } else {
            await this.client.set(key, serializeValue);
        }
        consLog(`✅ Кэш записал данные в ${this.name}. key=${key}, value=${serializeValue}`)
    }

    /**
     * 
     * @param { BaseCacheModel } model 
     * @returns 
     */
    async get(model) {
        if (!this.connected) {
            await this.connect();
        }

        const key = this.buildKey(model);
        const value = await this.client.get(key);
        const deserealizeValue = this.#deserealize(value);

        consLog(`✅ Кэш получил данные из ${this.name}. key=${key}, value=${value}`)

        return deserealizeValue;
    }

    /**
     * 
     * @param {BaseCacheModel} model 
     */
    async delete(model) {
        if (!this.connected) {
            await this.connect();
        }
        const key = this.buildKey(model);

        await this.client.del(key);
        consLog(`✅ Кэш удалил данные из ${this.name}. key=${key}`)
    }
}

const cache = new Cache();

module.exports = {cache}