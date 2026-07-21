const { MENU_CALLBACK, BACK_TO_MENU_CALLBACK } = require('../../config/constants');
const { BUTTON_MENU, BUTTON_BACK } = require('../texts/buttons');


const menuKeyboard = {
    inline_keyboard: [
        [
            { text: BUTTON_MENU, callback_data: MENU_CALLBACK },
        ],
    ],
};

const backToMenuRow = [
    { text: BUTTON_BACK, callback_data: BACK_TO_MENU_CALLBACK },
];

const backToMenuKeyboard = {
    inline_keyboard: [
        backToMenuRow,
    ],
};


module.exports = { menuKeyboard, backToMenuKeyboard, backToMenuRow };
