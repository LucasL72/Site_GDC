const Article = require("../models/ArticleModel");

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
    try {
      const { title, description, contenu, auteur } = req.body;
      const imgarticle =
        req.file.filename.split(".").slice(0, -1).join(".") + ".webp";
      let newArticle = new Article({
        imgarticle: imgarticle,
        title: title,
        description: description,
        contenu: contenu,
        auteur: auteur,
      });

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
    try {
      const { title, description, contenu, auteur } = req.body;
      let articleObj = new Article({
        id:req.params.id,
        title: title,
        description: description,
        contenu: contenu,
        auteur: auteur,
      });
      articleObj.editOne().then((data) => {
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
    try {
    let articleObj = new Article({
      id:req.params.id,
    });
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
    console.log(req.params['id'])
  }

  async deleteOne(req, res) {
    try {
      let articleObj = new Article({
        id:req.params.id,
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
}

module.exports = ArticleControllers;
