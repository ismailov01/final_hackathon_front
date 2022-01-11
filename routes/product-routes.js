const router = require("express").Router();

const { auth } = require("../middlewares/auth-middleware.js");
const checkPermission = require("../middlewares/check-permission.js");
const checkRole = require("../middlewares/check-role.js");
const { Product } = require("../models/index.js");
const ProductController = require("../controllers/product-controller.js");

router.post("/create", auth, ProductController.create);
router.delete(
    "/:id",
    auth,
    checkRole("ADMIN", "USER"),
    checkPermission(Product),
    ProductController.deleteOne
);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);
router.patch("/:id", ProductController.update);
module.exports = router;
