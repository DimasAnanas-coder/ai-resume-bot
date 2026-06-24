const { MENU_CALLBACK, BACK_TO_MENU_CALLBACK } = require("../../config/constants")


const menuKeyboard = {
    inline_keyboard: [
        [ 
            { text: "⚙️ Меню", callback_data: MENU_CALLBACK } 
        ]
    ]
};

const backToMenuRow = [
    { text: "< Назад", callback_data: BACK_TO_MENU_CALLBACK }
];

const backToMenuKeyboard = {
    inline_keyboard: [
        backToMenuRow
    ]
};


module.exports = { menuKeyboard, backToMenuKeyboard };