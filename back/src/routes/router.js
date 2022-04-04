/*
 * Import Module
 * ************* */
const router = require("express").Router();
const upload = require("../config/multer"),
sharp = require("../config/sharp");

const ArticleControllers = require("../controllers/ArticleControllers");

// Routes
router.route("/Blog").get(new ArticleControllers().getAll);

router.route("/Blog/:id").get(new ArticleControllers().getId);

router
  .route("/Admin/Blog")
  .get(new ArticleControllers().getAll)
  .post( new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

  router
  .route("/Admin/Blog/img")
  .post(upload.single("imgarticle"),sharp)

router
  .route("/Admin/Blog/:id")
  .get(new ArticleControllers().getId)
  .put(upload.single("imgarticle"),sharp, new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

module.exports = router;
