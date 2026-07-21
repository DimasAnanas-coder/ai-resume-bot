const { consLog } = require("../utils/consLog");

class Database {
    /**
     *
     * @param { Object } params
     */
    constructor(params) {
        Object.assign(this, params);
        if (!this.dbType) {
            throw new Error('dbType - обязательное поле. Тип базы данных, например postgres или redis');
        }
        consLog(this.url);
        consLog(!this.url);
        if (!this.url) {
            this.url = this.#buildDatabaseURL();
        }
    }

    #buildDatabaseURL() {
        if (!this.user || !this.password || !this.host || !this.port || !this.name) {
            console.error('❌ Ошибка: отсутствуют данные для подключения к БД');
            console.error('   user:', this.user || '❌');
            console.error('   host:', this.host || '❌');
            console.error('   port:', this.port || '❌');
            console.error('   name:', this.name || '❌');
            console.error('   password:', this.password ? '***' : '❌');
            throw new Error('Недостаточно данных для подключения к базе данных');
        }

        const url = `${this.dbType}://${this.user}:${this.password}@${this.host}:${this.port}/${this.name}?schema=public`;
        consLog('✅ URL собран:', url.replace(/:[^:@]+@/, ':***@'));
        return url;
    }
}

module.exports = Database
