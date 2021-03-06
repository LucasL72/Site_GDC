/*
 * Import Module
 * ************* */
const express = require("express");
const router = express.Router();
const upload = require("../config/Multer"),
  sharpArticles = require("../config/SharpArticles"),
  sharpAlbum = require("../config/SharpAlbum"),
  SharpUser = require("../config/SharpUser");

const TokenJWT = require("../middlewares/Token_jwt");

const ArticleControllers = require("../controllers/ArticleControllers");
const EventController = require("../controllers/EventController");
const MessagesController = require("../controllers/MessagesController");
const UserController = require("../controllers/UserController");
const PicsController = require("../controllers/PicsController");
const ComsController = require("../controllers/ComsController");

// Routes
// APP
router
  .route("/api/")
  .get(new EventController().getAll)
  .post(new MessagesController().create);

router.route("/api/Actu").get(new ArticleControllers().getNews);

router.route("/api/login").post(new UserController().login);

router.route("/api/lostpassword").put(new UserController().editPassword);
router.route("/api/lostpassword/:id").put(new UserController().editPassword);
// Session
router
  .route("/api/auth/:token")
  .get(new TokenJWT().checkIsValid, new UserController().checkToken);

router.route("/api/auth/verify/:id").get(new UserController().verifMail);

router
  .route("/api/Contact")
  .get(new EventController().getAll)
  .post(new MessagesController().create);

router
  .route("/api/Register")
  .get(new UserController().getAll)
  .post(upload.single("image"), SharpUser, new UserController().create);

router.route("/api/Blog").get(new ArticleControllers().getAll);

router.route("/api/Photos").get(new PicsController().getAll);

router
  .route("/api/Blog/:id")
  .get(new ArticleControllers().getId)
  .post(new ComsController().create);

// ADMIN
router.route("/api/Admin/User").get(new UserController().getAll);

router
  .route("/api/Admin/User/:id")
  .get(new UserController().getId)
  .put(new UserController().editOne)
  .delete(new UserController().deleteOne);

router
  .route("/api/Admin/User/Ban/:id")
  .get(new UserController().getId)
  .put(new UserController().BanUser);

router
  .route("/api/Admin/Blog")
  .get(new ArticleControllers().getAll)
  .post(upload.single("image"), sharpArticles, new ArticleControllers().create);

router
  .route("/api/Admin/Blog/:id")
  .get(new ArticleControllers().getId)
  .put(upload.single("image"), sharpArticles, new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

router.route("/api/Admin/Coms").get(new ComsController().getAll);

router
  .route("/api/Admin/Coms/:id")
  .get(new ComsController().getId)
  .delete(new ComsController().deleteOne);

router
  .route("/api/Admin/Photos")
  .get(new PicsController().getAll)
  .post(upload.single("image"), sharpAlbum, new PicsController().create);

router
  .route("/api/Admin/Photos/:id")
  .get(new PicsController().getId)
  .delete(new PicsController().deleteOne);

router
  .route("/api/Admin/Events")
  .get(new EventController().getAll)
  .post(new EventController().create);

router
  .route("/api/Admin/Events/:id")
  .get(new EventController().getId)
  .put(new EventController().editOne)
  .delete(new EventController().deleteOne);

router
  .route("/api/Admin/Messages")
  .get(new MessagesController().getAll)
  .post(new MessagesController().create);

router
  .route("/api/Admin/Messages/reply")
  .post(new MessagesController().replyMessage);

router
  .route("/api/Admin/Messages/:id")
  .get(new MessagesController().getId)
  .delete(new MessagesController().deleteOne);

module.exports = router;
