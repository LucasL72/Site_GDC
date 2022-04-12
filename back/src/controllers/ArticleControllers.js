const Article = require("../models/ArticleModel");
const help = require("../utils/help");
const fs = require("fs");
const path = require("path");

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
    const id = req.params.id;
    const imgarticle = req.file.filename.split(".").slice(0, -1).join(".") + ".webp";
    let newArticle = new Article({
      id: id,
      imgarticle: imgarticle,
      title: title,
      description: description,
      contenu: contenu,
      auteur: auteur,
    });
    console.log(imgarticle, id);
    try {
      newArticle
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    const { title, description, contenu, auteur } = req.body;
    const id = req.params.id;
    const imgarticle = req.file;
    let articleObj = new Article({
      id: id,
      imgarticle: imgarticle,
      title: title,
      description: description,
      contenu: contenu,
      auteur: auteur
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
