/*Array.prototype.last = function () {
    return this[this.length - 1];
}*/

Object.defineProperty(Array.prototype, "last", {
    get() {
        return this[this.length - 1];
    },
    configurable: true,
    enumerable: false,
});