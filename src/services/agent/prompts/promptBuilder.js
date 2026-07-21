const systemPrompts = require('./systemPrompts.json');
const userPrompts = require('./userPrompts.json');

function buildUserPrompt(userInfo) {
    return userPrompts.task.replace('{user_info}', userInfo.trim());
}

function buildSystemPrompt() {
    return [
        systemPrompts.role,
        systemPrompts.extraction_rules,
        systemPrompts.output_rules,
    ].join('\n\n');
}

module.exports = {
    buildUserPrompt,
    buildSystemPrompt,
};
