const systemPrompts = require('./systemPrompts.json');
const userPrompts = require('./userPrompts.json');

function buildSchemaPrompt() {
    return userPrompts.schema.toString();
}

function buildUserPrompt(userInfo) {
    let prompt = userPrompts.json_spec.replace('{user_info}', userInfo);
    prompt += userPrompts.not_required_fields;
    prompt += buildSchemaPrompt();
    return prompt;
}

function buildSystemPrompt() {
    return systemPrompts.personality_identity + systemPrompts.use_json;
}

module.exports = {
    buildUserPrompt,
    buildSystemPrompt
}