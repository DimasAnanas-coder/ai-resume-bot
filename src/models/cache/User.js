const BaseCacheModel = require("./BaseCacheModel");

class User extends BaseCacheModel{
    get name(){
        return "user"
    }
}

module.exports = User;
