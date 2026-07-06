const { GoogleGenAI } = require("@google/genai");
const { geminiApiKey } = require("../../config");
const { consLog } = require("../../utils/consLog");
const { model } = require("../../config/constants");

const globalForGemini = global;
const MAX_RESPONSE_LOG_LENGTH = 200;

function setGemini(){ 
    if (!globalForGemini.ai) {
        consLog("Инициализация Gemini API");
        globalForGemini.ai = new GoogleGenAI({ apiKey: geminiApiKey });
    }
    return globalForGemini.ai;
}


async function getResponse(userPrompt, systemPrompt=null){
    let aiGemini = globalForGemini.ai;
    if (!aiGemini) {
        aiGemini = setGemini();
    }

    if (!userPrompt) {
        consLog("Запрос к Gemini API пуст");
        return null;
    }
    consLog("Запрос к Gemini API", userPrompt);
    consLog("Системный промпт", systemPrompt);

    try {
        const content = await aiGemini.models.generateContent({
            model: model,
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
                temperature: 0.4,
            },
        });

        const responseText = content.text;
        if (!responseText) {
            consLog("Ответ от Gemini API пуст");
            return null;
        }
        consLog(
            "Ответ от Gemini API", 
            responseText.slice(0, MAX_RESPONSE_LOG_LENGTH)
        );

        return responseText;
    } catch (error) {
        consLog("Ошибка при получении ответа от Gemini API", error);
        return null;
    }
}

module.exports = { getResponse };