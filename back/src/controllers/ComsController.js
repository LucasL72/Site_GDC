const Commentaire = require("../models/ComsModel");


class ComsControllers {
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
    const {content,pseudouser} = req.body;
    const id = req.params.id;
    let newCommentaire = new Commentaire({
      id: id,
      content: content,
      pseudouser:pseudouser,
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
    let comObj = new Commentaire({
      id: Number(req.params.id),
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

module.exports = ComsControllers;