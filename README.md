# AI Resume Bot

Telegram-бот для генерации резюме с помощью нейросети (Google Gemini). Работает на Node.js + Telegraf, хранит пользователей и логи в PostgreSQL (через Prisma), кэширует данные в Redis. Есть платная система тарифов на генерацию резюме и роли (обычный пользователь / суперадмин).

## Возможности

- Генерация резюме через Gemini API по данным, которые пользователь присылает в чат.
- Тарифы на количество генераций (`src/config/constants/prices.js`) с оплатой через Telegram-клавиатуры. Оплата конкретно не подключена, однако планируется использование ЮКассы с генерацией ссылки платежа
- Учёт пользователей, ролей и оставшегося количества резюме в PostgreSQL.
- Кэш горячих данных пользователя в Redis.
- Логирование платежей и генераций (`Log`, `PaymentLog`, `GenerationLog` в Prisma-схеме). Фактически не используется, однако заложено схемой

## Стек

- Node.js (CommonJS), [Telegraf](https://github.com/telegraf/telegraf) — Telegram Bot API
- PostgreSQL + [Prisma](https://www.prisma.io/) — основная БД
- Redis — кэш
- [@google/genai](https://www.npmjs.com/package/@google/genai) — генерация резюме
- Docker / docker-compose — запуск бота вместе с Postgres и Redis

## Структура проекта

```
src/
  bot/        # хендлеры, клавиатуры и тексты команд Telegram
  config/     # переменные окружения и константы (цены, роли, callback-и)
  db/         # доступ к данным пользователей (Prisma)
  lib/        # инициализация Prisma-клиента
  models/     # модели БД и кэша
  services/   # кэш (Redis) и обращение к Gemini API
  utils/      # хэш-функция, логирование, вспомогательные утилиты
prisma/       # schema.prisma и сгенерированный клиент
scripts/      # entrypoint для Docker, инициализация Redis, создание админов
```

## Настройка

1. Скопируйте `.env.example` в `.env` и заполните значения (токен бота, ключ Gemini, доступы к Postgres и Redis, ID суперадминов).
2. Установите зависимости:
   ```
   npm install
   ```
3. Примените Prisma-схему:
   ```
   npm run db:generate
   npm run db:migrate
   ```

## Запуск

Локально:
```
npm start      # обычный запуск
npm run dev    # с автоперезапуском (nodemon)
```

В Docker (поднимает бота, Postgres и Redis одной командой):
```
npm run docker:up
```

## Полезные скрипты

| Команда | Что делает |
|---|---|
| `npm run db:studio` | открыть Prisma Studio для просмотра БД |
| `npm run db:push` | применить схему без миграции |
| `npm run db:initadmin` | назначить суперадминов из `SUPER_ADMIN_IDS` |
| `npm run docker:logs` | посмотреть логи контейнера бота |
| `npm run docker:down` | остановить контейнеры |

---

*Этот файл сгенерирован нейросетью (Claude).*
