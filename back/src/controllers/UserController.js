const User = require("../models/UserModel");

class UserController {
  async getAll(req, res) {
    try {
      const newUser = new User({});
      newUser
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbUsers: data,
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
    const { pseudo, prenom, nom, adresse, city, postal, email, password } =
      req.body;
    let newUser = new User({
      pseudo: pseudo,
      prenom: prenom,
      nom: nom,
      adresse: adresse,
      city: city,
      postal: postal,
      email: email,
      password: password,
    });
    try {
      newUser
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbUsers: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    const { pseudo, prenom, nom, adresse, city, postal, email, password } =
      req.body;
    let userObj = new User({
      id: req.params.id,
      pseudo: pseudo,
      prenom: prenom,
      nom: nom,
      adresse: adresse,
      city: city,
      postal: postal,
      email: email,
      password: password
    });
    try {
      userObj.editOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create user Success !",
          dbUsers: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    let userObj = new User({
      id: req.params.id,
      pseudo: pseudo,
      prenom: prenom,
      nom: nom,
      adresse: adresse,
      city: city,
      postal: postal,
      email: email,
      password: password,
    });
    try {
      userObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create user Success !",
          dbUsers: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      let userObj = new User({
        id: req.params.id,
      });
      userObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete user Success !",
          dbUsers: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
  async Ban(req, res) {
    
    let userObj = new User({
      id: req.params.id,
      isBan:req.body,
    });
    try {
      userObj.Ban().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create user Success !",
          dbUsers: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
  async Unban(req, res) {
    let userObj = new User({
      id: req.params.id,
      isBan:req.body,
    });
    try {
      userObj.Unban().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create user Success !",
          dbUsers: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
