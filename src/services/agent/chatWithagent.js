const { getResponse } = require("../api/gemini");
const { buildUserPrompt, buildSystemPrompt } = require("./prompts/promptBuilder");
const { resumeResponseSchema } = require("../agent/prompts/resumeResponseSchema");
const { AGENT_TEMPERATURE } = require("../../config/constants/models");


async function chatWithAgent(prompt) {
    const response = await getResponse(
        buildUserPrompt(prompt),
        buildSystemPrompt(),
        {
            temperature: AGENT_TEMPERATURE,
            responseMimeType: "application/json",
            responseJsonSchema: resumeResponseSchema,
        }
    );
    return response;
}

module.exports = { chatWithAgent };