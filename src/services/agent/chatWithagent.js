const { getResponse } = require("../api/gemini");
const { buildUserPrompt, buildSystemPrompt } = require("./prompts/promptBuilder");

async function chatWithAgent(prompt) {
    const response = await getResponse(
        buildUserPrompt(prompt),
        buildSystemPrompt()
    );
    return response;
}

module.exports = { chatWithAgent };