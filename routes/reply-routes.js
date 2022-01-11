const router = require("express").Router();

const { auth } = require("../middlewares/auth-middleware.js");
const ReplyController = require("./../controllers/reply-controller.js");

router.post("/create", auth, ReplyController.create);
router.get("/", ReplyController.getAll);

module.exports = router;
