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
    const id = req.params.id;
    const articles_id ="1";
    const pseudouser = "lucas";
    const user_id = "1";
    let newCommentaire = new Commentaire({
      id: id,
      content: content,
      articles_id: articles_id,
      pseudouser:pseudouser,
      user_id:user_id,
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