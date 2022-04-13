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
      const imguser = req.file.filename.split(".").slice(0, -1).join(".") + ".webp";
    let newUser = new User({
      imguser:imguser,
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
      password: password,
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
  async BanUser(req, res) {
      const id = req.params;
    let userObj = new User({
        id: req.params.id,
      });
    try {
      userObj.BanUser({ id }, (err, data) => {
        // console.log("response controller user update", data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            method: req.method,
            status: "success",
            message: " The user has been successfully BANNED.!!!",
            user: data,
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
