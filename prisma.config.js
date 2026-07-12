const { buildDatabaseURL } = require("./src/utils/buildDatabaseURL.js")
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
