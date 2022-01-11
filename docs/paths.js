const problems = require("./problems");
const users = require("./users");

module.exports = {
    paths: {
        ...users,
        ...problems
    }

}