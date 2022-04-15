const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

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
    const imguser =
      req.file.filename.split(".").slice(0, -1).join(".") + ".webp";
    let newUser = new User({
      imguser: imguser,
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


  async login(req, res) {
    console.log("controller login", req.body);
    try {
      User.login({ ...req.body }, (err, data) => { // 1234
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          let token = "visitor";
          if (data.name && data.email) {
            token = jwt.sign(
              {
                id: data.id,
                name: data.name,
                email: data.email,
                authenticate: data.isVerified ? true : false,
                isAdmin: data.isAdmin === 1 ? true : false,
              },
              process.env.SIGN_JWT,
              { expiresIn: "1h" }
            );
          }

          return res.send({
            method: req.method,
            status: "success",
            flash: "Login Success !",
            token: token,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }
  async checkToken(req, res) {
    console.log("check token", req.params.token);
    const user = jwt.verify(
      req.params.token,
      process.env.SIGN_JWT,
      (err, decoded) => {
        if (err) return;
        return decoded;
      }
    );
    try {
      // JWT
      return res.send({
        method: req.method,
        status: "success",
        flash: "Login Auth Success !",
        user: {
          name: user.name,
          email: user.email,
          authenticate: user.authenticate,
          isAdmin: user.isAdmin,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
