const { ...env } = require("./env.js")
const { ...constants } = require("./constants")

module.exports = {
    ...env,
    ...constants
}
