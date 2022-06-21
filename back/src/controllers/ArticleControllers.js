const Article = require("../models/ArticleModel");

class ArticleControllers {
  async getAll(req, res) {
    try {
      Article.getAll((err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }
  async getNews(req, res) {
    try {
      Article.getNews((err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    const { title, description, contenu, auteur } = req.body;
    const user_id = "1";
    const imgarticle =
      req.file.filename.split(".").slice(0, -1).join(".") + ".webp";
    let newArticle = new Article({
      imgarticle: String(imgarticle),
      title: String(title),
      description: String(description),
      contenu: String(contenu),
      auteur: String(auteur),
      user_id: Number(user_id),
    });
    try {
      Article.create(newArticle, (err, data) => {
        if (err) res.send(err);
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create Article Success !",
          dbArticles: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    let articleObj = new Article({
      id: req.params.id,
      ...req.body,
    });
    try {
      Article.editOne(articleObj, req.file, async (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            status: "success",
            message: "Votre article a été modifié",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    try {
      Article.getById(String(req.params.id), (err, data) => {
        console.log("data id res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      Article.deleteOne(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArticleControllers;
