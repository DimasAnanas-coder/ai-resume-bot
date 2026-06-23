const { MENU_CALLBACK } = require("../../config/constants")

const menuKeyboard = {
    inline_keyboard: [
        [ 
            { text: "⚙️ Меню", callback_data: MENU_CALLBACK } 
        ]
    ]
}

module.exports = { menuKeyboard };