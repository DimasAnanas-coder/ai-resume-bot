
/**
 * Базовый класс модели данных, которые могут храниться в кэше Редиса
 */
class BaseCacheModel {
    constructor(id) {
        this.id = id;
    }

    /**
     * Абстрактный метод получения имени модели. Должен быть переопределен в дочернем классе
     */
    get name() {
        throw new Error('Метод name не определен в классе модели');
    }

}

module.exports = BaseCacheModel;
