const router = require("express").Router();

const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");
const commentRoutes = require("./comment-routes")
const feedbackRoutes = require("./feedback-routes")
const likeRoutes = require('./like-routes')

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/comment", commentRoutes)
router.use('/feedback', feedbackRoutes)
router.use('/like', likeRoutes)
module.exports = router;
