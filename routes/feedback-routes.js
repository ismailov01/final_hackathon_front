const router = require("express").Router();

const { auth } = require("../middlewares/auth-middleware.js");
const checkPermission = require("../middlewares/check-permission.js");
const checkRole = require("../middlewares/check-role.js");
const { Rating } = require("../models/index.js");
const FeedbackController = require("./../controllers/feedback-controller");

router.post("/create", auth, FeedbackController.create);
router.get("/:id", FeedbackController.getAll);
router.patch("/:id", auth, checkRole("ADMIN", "USER"),
    checkPermission(Rating), FeedbackController.update);
router.delete("/:id", auth, checkRole("ADMIN", "USER"),
    checkPermission(Rating), FeedbackController.deleteOne);
router.get("/get/:id", FeedbackController.getOne);

module.exports = router;
