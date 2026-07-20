'use strict';

module.exports = [
    {
        files: ['**/*.js'],
        ignores: [
            'node_modules/**',
            'prisma/generated/**',
        ],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            globals: {
                // Node.js глобальные переменные
                require: 'readonly',
                module: 'readonly',
                exports: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                // ES6+ глобальные переменные
                Promise: 'readonly',
                Map: 'readonly',
                Set: 'readonly',
                WeakMap: 'readonly',
                WeakSet: 'readonly',
                Symbol: 'readonly',
                Reflect: 'readonly',
                Proxy: 'readonly',
                // Ошибки и отладка
                Error: 'readonly',
                TypeError: 'readonly',
                ReferenceError: 'readonly',
                // JSON
                JSON: 'readonly',
                // Другие
                globalThis: 'readonly',
                global: 'readonly',
            },
        },
        rules: {
            // Базовые правила (опционально)
            //'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
            'no-console': 'off', // Разрешить console.log (можно включить позже)
            'semi': ['error', 'always'], // Требовать точку с запятой
            'quotes': ['error', 'single', { 'avoidEscape': true }], // Одинарные кавычки
            'indent': ['error', 4, { 'SwitchCase': 1 }], // Отступ 4 пробела
            'comma-dangle': ['error', 'always-multiline'], // Запятая в конце для многострочных
            'no-var': 'error', // Запретить var, использовать let/const
            'prefer-const': 'error', // Использовать const где возможно
            'eqeqeq': ['error', 'always'], // Использовать === вместо ==
            'curly': ['error', 'all'], // Всегда использовать {} для блоков
            'brace-style': ['error', '1tbs'], // Стиль скобок
            'space-before-function-paren': ['error', 'never'], // Без пробела перед (
            'space-in-parens': ['error', 'never'], // Без пробела в скобках
            'object-curly-spacing': ['error', 'always'], // Пробелы в объектах: { a: 1 }
            'array-bracket-spacing': ['error', 'never'], // Без пробелов в массивах: [1, 2]
            'eol-last': ['error', 'always'], // Пустая строка в конце файла
            'no-trailing-spaces': 'error', // Без пробелов в конце строк
            'no-multiple-empty-lines': ['error', { 'max': 2 }], // Не более 2 пустых строк
        },
    },
];
