const Article = require("../models/ArticleModel");
const path = require("path");
const help = require("../utils/help");
const fs = require("fs");

class ArticleControllers {
  async getAll(req, res) {
    try {
      const newArticle = new Article({});
      newArticle
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    const { title, description, contenu, auteur } = req.body;
    const index = req.file.mimetype.indexOf("image");
    if (index !== -1) {
      // Recupère le chemin complet avec extention .webp ou l'image a été enregister avec sharp (avec le nom orignal)
      const pathImgwebp = path.resolve(
        pathImgarticle +
          req.file.filename.split(".").slice(0, -1).join(".") +
          ".webp"
      );
      const pathImgarticlewebp = path.resolve(
        pathImgarticle + "article_" + req.body.user_id + ".webp"
      );
      setTimeout(function () {
        help.renameFile(pathImgwebp, pathImgarticlewebp);
      }, 600);
    }
    if (req.body.id && req.file) {
      let newArticle = new Article({
        id: id,
        imgarticle: pathImgarticleDb + "article_" + req.body.id + ".webp",
        title: title,
        description: description,
        contenu: contenu,
        auteur: auteur,
      });
      try {
        Article.create(newArticle, (err, data) => {
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
  }

  async editOne(req, res) {
    const { title, description, contenu, auteur } = req.body;
    const imgarticle = req.file.filename;
    if (id > 0) {
      articleObj = new Article({
        id: req.params.id,
        imgarticle: imgarticle,
        title: title,
        description: description,
        contenu: contenu,
        auteur: auteur,
      });
      try {
        Article.editOne(articleObj, req.file, async (err, data) => {
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
  }

  async getId(req, res) {
    let articleObj = new Article({
      id: Number(req.params.id),
    });
    try {
      articleObj.getById().then((data) => {
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

  async deleteOne(req, res) {
    try {
      let articleObj = new Article({
        id: Number(req.params.id),
      });
      articleObj.deleteOne().then((data) => {
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

  async deleteAll(req, res) {
    try {
      return res.send("OK");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArticleControllers;
