/*
 * Import Module
 * ************* */
const express = require("express");
const router = express.Router();
const upload = require("../config/multer"),
sharp = require("../config/sharp");

const ArticleControllers = require("../controllers/ArticleControllers");
const EventController = require("../controllers/EventController");
const UserController = require("../controllers/UserController");

// Routes
// APP
router.route("/").get(new EventController().getAll);

router.route("/Contact").get(new EventController().getAll);

router.route("/Register").post(new UserController().create);

router.route("/Blog").get(new ArticleControllers().getAll);

router.route("/Blog/:id").get(new ArticleControllers().getId);

// ADMIN
router
  .route("/Admin/User")
  .get(new UserController().getAll)

router
  .route("/Admin/User/:id")
  .get(new UserController().getId)
  .put( new UserController().editOne)
  .delete(new UserController().deleteOne);

  router
  .route("/Admin/User/Ban/:id")
  .put( new UserController().Ban)

  router
  .route("/Admin/User/Unban/:id")
  .put( new UserController().Unban)


router
  .route("/Admin/Blog")
  .get(new ArticleControllers().getAll)
  .post(upload.single("imgarticle"),sharp, new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

router
  .route("/Admin/Blog/:id")
  .get(new ArticleControllers().getId)
  .put(upload.single("imgarticle"),sharp, new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

  router
  .route("/Admin/Events")
  .get(new EventController().getAll)
  .post( new EventController().create)

router
  .route("/Admin/Events/:id")
  .get(new EventController().getId)
  .put( new EventController().editOne)
  .delete(new EventController().deleteOne);


module.exports = router;
