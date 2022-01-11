const ErrorHandler = require("./../utils/error-handler.js");
const { validateRefreshToken } = require('./../utils/tokens')
const { User } = require("./../models/index.js");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const {
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
  WRONG_CREDENTIALS,
} = require("../utils/consts");
const { generateTokens } = require("../utils/tokens.js");
const { sendActivationMail } = require("./mail-service.js");

const signup = async (email, password, username, role = "USER") => {
  const oldUser = await User.findOne({ where: { email } });

  if (oldUser) {
    throw ErrorHandler.BadRequest(USER_ALREADY_EXISTS);
  }

  const hashedPassword = await bcrypt.hash(password, 3);
  const activationLink = uuid();
  const user = await User.create({
    email,
    password: hashedPassword,
    username,
    role,
    activationLink,
  });
  await sendActivationMail(
    email,
    `${process.env.API}/api/user/activate/${activationLink}`
  );
  const tokens = generateTokens({ id: user.id, email, role, username });
  console.log(tokens);
  return tokens;
};

const activate = async (link) => {
  const user = await User.findOne({ where: { activationLink: link } });
  if (!user) {
    throw ErrorHandler.BadRequest("Activation link is incorrect");
  }
  user.isActivated = true;
  await user.save();
};

const refresh = async (token) => {
  if (!token) {
    throw ErrorHandler.UnauthorizedError()
  }
  const userData = validateRefreshToken(token)

  if (!userData) {
    throw ErrorHandler.UnauthorizedError()
  }

  const user = await User.findOne({ where: { id: userData.id } })

  if (!user) {
    throw ErrorHandler.BadRequest(user + " NOT_FOUND")
  }

  const tokens = generateTokens({ id: user.id, email: user.email, role: user.role, username: user.username })
  return tokens
}

const getAll = async (status) => {
  if (status === 'active') {
    return await User.findAll({ where: { isActivated: true } })
  }
  else if (status === 'inactive') {
    return await User.findAll({ where: { isActivated: false } })
  }
  return await User.findAll();
};
const getOne = async (id) => {
  return await User.findOne({ where: { id } })
}
const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw ErrorHandler.BadRequest(USER_NOT_FOUND);
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw ErrorHandler.BadRequest(WRONG_CREDENTIALS);
  }
  const tokens = generateTokens({ id: user.id, email, role: user.role, username: user.username });
  return tokens;
};
module.exports = {
  signup,
  getAll,
  login,
  activate,
  refresh,
  getOne
};
