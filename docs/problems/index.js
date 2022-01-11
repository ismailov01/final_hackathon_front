const getProblem = require("./get-problem");

module.exports = {
    '/api/problem/{id}': {
        ...getProblem,
    },
}