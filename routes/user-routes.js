const router = require("express").Router();

const { auth } = require("../middlewares/auth-middleware.js");
const checkRole = require("../middlewares/check-role.js");
const UserController = require("./../controllers/user-controller.js");

const { body, check } = require("express-validator")

router.post("/signup", body('email').isEmail(), check('password').isLength({ min: 3 }).withMessage('must contain at least 3 characters'), UserController.signup);
router.post("/login", UserController.login);
router.get("/", UserController.getAll);
router.get("/:id", UserController.getOne);
router.post("/refresh", UserController.refresh)
router.get("/activate/:link", UserController.activate);

module.exports = router;
