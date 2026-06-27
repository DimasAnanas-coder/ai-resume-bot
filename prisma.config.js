const { buildDatabaseURL } = require("./src/lib/prisma.js")
const { defineConfig } = require("prisma/config");

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: buildDatabaseURL(),
  },
});
