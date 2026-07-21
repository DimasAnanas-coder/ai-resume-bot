/**
 * JSON Schema для structured output Gemini API.
 * Корневая структура ответа всегда одинакова — удобно парсить через JSON.parse().
 */
const resumeResponseSchema = {
    type: 'object',
    additionalProperties: false,
    required: ['resume'],
    properties: {
        resume: {
            type: 'object',
            additionalProperties: false,
            required: [
                'personal_info',
                'target_position',
                'education',
                'experience',
                'skills',
                'projects',
                'certificates',
            ],
            properties: {
                personal_info: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['name', 'email', 'phone', 'address', 'age', 'city', 'gender'],
                    properties: {
                        name: { type: ['string', 'null'] },
                        email: { type: ['string', 'null'] },
                        phone: { type: ['string', 'null'] },
                        address: { type: ['string', 'null'] },
                        age: { type: ['integer', 'null'] },
                        city: { type: ['string', 'null'] },
                        gender: { type: ['string', 'null'] },
                    },
                },
                target_position: { type: ['string', 'null'] },
                education: { type: ['string', 'null'] },
                experience: {
                    type: 'array',
                    items: {
                        type: 'object',
                        additionalProperties: false,
                        required: [
                            'company',
                            'position',
                            'start_date',
                            'end_date',
                            'period',
                            'description',
                        ],
                        properties: {
                            company: { type: ['string', 'null'] },
                            position: { type: ['string', 'null'] },
                            start_date: { type: ['string', 'null'] },
                            end_date: { type: ['string', 'null'] },
                            period: { type: ['string', 'null'] },
                            description: { type: ['string', 'null'] },
                        },
                    },
                },
                skills: {
                    type: 'array',
                    items: {
                        type: 'object',
                        additionalProperties: false,
                        required: ['skill'],
                        properties: {
                            skill: { type: 'string' },
                        },
                    },
                },
                projects: {
                    type: 'array',
                    items: {
                        type: 'object',
                        additionalProperties: false,
                        required: ['project', 'description', 'technologies', 'link'],
                        properties: {
                            project: { type: ['string', 'null'] },
                            description: { type: ['string', 'null'] },
                            technologies: { type: ['string', 'null'] },
                            link: { type: ['string', 'null'] },
                        },
                    },
                },
                certificates: {
                    type: 'array',
                    items: {
                        type: 'object',
                        additionalProperties: false,
                        required: ['certificate', 'description', 'link'],
                        properties: {
                            certificate: { type: ['string', 'null'] },
                            description: { type: ['string', 'null'] },
                            link: { type: ['string', 'null'] },
                        },
                    },
                },
            },
        },
    },
};

module.exports = { resumeResponseSchema };
