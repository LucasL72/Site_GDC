const Commentaire = require("../models/ComsModel");


class ComsController {
  async getAll(req, res) {
    try {
      const newCommentaire= new Commentaire({});
      newCommentaire
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "get coms  Success !",
            dbComs: data,
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
    const {content} = req.body;
    const article_id = "1";
    const pseudouser = "lucas";
    console.log("token",req.params.token)
    const user_id = "1";
    let newCommentaire = new Commentaire({
      content: content,
      articles_id: Number(article_id),
      pseudouser:pseudouser,
      user_id:String(user_id),
    });
    try {
      newCommentaire
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create commentaire Success !",
            dbComs: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

  

  async getId(req, res) {
    const id = req.params.id
    let comObj = new Commentaire({
      id: Number(id),
    });
    try {
      comObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "get id commentaire Success !",
          dbComs: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      let comObj = new Commentaire({
        id: Number(req.params.id),
      });
      comObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete commentaire Success !",
          dbComs: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = ComsController;