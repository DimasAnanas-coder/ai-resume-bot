const { PAYMENT_CALLBACK, GENERATE_RESUME_CALLBACK } = require("../../config/constants")


const mainMenuKeyboard = {
    inline_keyboard: [
        [ 
            { text: "Создать резюме", callback_data: GENERATE_RESUME_CALLBACK } 
        ],
        [ 
            { text: "Купить генерации", callback_data: PAYMENT_CALLBACK } 
        ]
    ]
}






module.exports = { mainMenuKeyboard };