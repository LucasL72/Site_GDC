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
    const { title, description } = req.body;
    let newArticle = new Article({
      title: String(title),
      description: String(description),
    });
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
    const { title, description } = req.body;
    let articleObj = new Article({
      id: Number(req.params.id),
      title: String(title),
      description: String(description),
    });
    try {
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