const getUsers = require('./get-users')
const loginUser = require('./login-user')
const signupUser = require('./singup-user')

module.exports = {
    '/api/user': {
        ...getUsers,
    },
    '/api/user/login': {
        ...loginUser
    },
    'api/user/signup': {
        ...signupUser
    }
}