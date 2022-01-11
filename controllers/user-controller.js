const ErrorHandler = require("./../utils/error-handler.js");
const UserService = require("./../services/user-service");
const { LocalStorage } = require('node-localstorage');
const { validationResult } = require("express-validator");
let localStorage = new LocalStorage('./scratch');

const signup = async (req, res, next) => {


  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return next(ErrorHandler.BadRequest('Validation error', errors.array()))
    }

    const { email, password, username } = req.body;

    const userData = await UserService.signup(
      email,
      password,
      username

    );

    res.json(userData);

  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await UserService.login(email, password);
    res.json(userData);
  } catch (e) {
    next(e);
  }
};
const refresh = async (req, res, next) => {
  try {
    const { refresh_token } = req.headers
    const userData = await UserService.refresh(refresh_token)
    res.json(userData)
  } catch (error) {
    next(error)
  }
}
const getAll = async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
};
const getOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await UserService.getOne(id)
    res.json(user)
  } catch (error) {
    console.log(error);
    next(error)
  }
}
const activate = async (req, res, next) => {
  try {
    const { link } = req.params;
    await UserService.activate(link);
    res.redirect("https://www.google.com");
  } catch (e) {
    next(e);
  }
};
module.exports = {
  signup,
  getAll,
  login,
  getOne,
  activate,
  refresh
};
