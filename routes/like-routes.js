const router = require("express").Router();

const { auth } = require("../middlewares/auth-middleware.js");
const checkPermission = require("../middlewares/check-permission.js");
const checkRole = require("../middlewares/check-role.js");
const { Like } = require("../models/index.js");
const LikeController = require("./../controllers/like-controller");

router.post("/create", auth, LikeController.create);
router.get("/:id", LikeController.getAll);
router.patch("/:id", auth, checkRole("ADMIN", "USER"),
    checkPermission(Like), LikeController.update);
router.delete("/:id", auth, checkRole("ADMIN", "USER"),
    checkPermission(Like), LikeController.deleteOne);
router.get("/get/:id", LikeController.getOne);

module.exports = router;
