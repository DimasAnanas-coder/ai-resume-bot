const { PAYMENT_CALLBACK, BUILD_RESUME_CALLBACK } = require('../../config/constants');
const { BUTTON_CREATE_RESUME, BUTTON_BUY_GENERATIONS } = require('../texts/buttons');


const mainMenuKeyboard = {
    inline_keyboard: [
        [
            { text: BUTTON_CREATE_RESUME, callback_data: BUILD_RESUME_CALLBACK },
        ],
        [
            { text: BUTTON_BUY_GENERATIONS, callback_data: PAYMENT_CALLBACK },
        ],
    ],
};


module.exports = { mainMenuKeyboard };
