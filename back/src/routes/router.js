/*
 * Import Module
 * ************* */
const express = require("express");
const router = express.Router();
const upload = require("../config/multer"),
  sharpArticles = require("../config/SharpArticles"),
  sharpAlbum = require("../config/SharpAlbum");

const ArticleControllers = require("../controllers/ArticleControllers");
const EventController = require("../controllers/EventController");
const MessagesController = require("../controllers/MessagesController");
const UserController = require("../controllers/UserController");
const PicsController = require("../controllers/PicsController");

// Routes
// APP
router
  .route("/")
  .get(new EventController().getAll)
  .post(new MessagesController().create);

router
  .route("/Contact")
  .get(new EventController().getAll)

router.route("/Register").post(new UserController().create);

router.route("/Blog").get(new ArticleControllers().getAll);

router.route("/Photos").get(new PicsController().getAll);

router.route("/Blog/:id").get(new ArticleControllers().getId);

// ADMIN
router.route("/Admin/User").get(new UserController().getAll);

router
  .route("/Admin/User/:id")
  .get(new UserController().getId)
  .put(new UserController().editOne)
  .delete(new UserController().deleteOne);

router
  .route("/Admin/User/Ban/:id")
  .get(new UserController().getId)
  .put(new UserController().BanUser);

router
  .route("/Admin/Blog")
  .get(new ArticleControllers().getAll)
  .post(upload.single("image"), sharpArticles, new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

router
  .route("/Admin/Blog/:id")
  .get(new ArticleControllers().getId)
  .put(upload.single("image"), sharpArticles, new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

  router
  .route("/Admin/Photos")
  .get(new PicsController().getAll)
  .post(upload.single("image"), sharpAlbum, new PicsController().create)
  .delete(new PicsController().deleteAll);

router
  .route("/Admin/Photos/:id")
  .get(new PicsController().getId)
  .delete(new PicsController().deleteOne);

router
  .route("/Admin/Events")
  .get(new EventController().getAll)
  .post(new EventController().create);

router
  .route("/Admin/Events/:id")
  .get(new EventController().getId)
  .put(new EventController().editOne)
  .delete(new EventController().deleteOne);

router
  .route("/Admin/Messages")
  .get(new MessagesController().getAll)
  .post(new MessagesController().create);

router
  .route("/Admin/Messages/:id")
  .get(new MessagesController().getId)
  .delete(new MessagesController().deleteOne);

module.exports = router;
