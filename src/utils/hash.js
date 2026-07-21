
/**
 * Функция для хэширования строки по алгоритму djb2
 * @param { String } str
 */
function hash(str) {
    let hashNumber = 0;
    for (let i = 0; i < str.length; i ++) {
        const charCode = str.charCodeAt(i);
        hashNumber = (hashNumber << 5 + hashNumber) + charCode;
        hashNumber = hashNumber & hashNumber;
    }
    return hashNumber;
}

module.exports = hash;
