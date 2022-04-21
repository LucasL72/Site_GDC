const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("../config/Nodemailer");
require("dotenv").config();

class UserController {
  async getAll(req, res) {
    try {
      User.getAll((err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create User Success !",
            dbUsers: data,
          });
        }
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
      imguser: String(imguser),
      pseudo: String(pseudo),
      prenom: String(prenom),
      nom: String(nom),
      adresse: String(adresse),
      city: String(city),
      postal: String(postal),
      email: String(email),
      password: String(password),
    });
    try {
      User.create(newUser, (err, data) => {
        if (err) res.send(err);
        nodemailer.VerifUser(req, res, (res) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create user Success !",
            dbUsers: data,
          });
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    const { pseudo, prenom, nom, adresse, city, postal, email, password } =
      req.body;
    let userObj = new User({
      id: Number(req.params.id),
      pseudo: String(pseudo),
      prenom: String(prenom),
      nom: String(nom),
      adresse: String(adresse),
      city: String(city),
      postal: String(postal),
      email: String(email),
      password: String(password),
    });
    try {
      User.editOne(userObj, (err, data) => {
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
    try {
      User.getById(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create user Success !",
            dbUsers: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      User.deleteOne(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "delete user Success !",
            dbUsers: data,
          });
        }
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
    try {
      User.login({ ...req.body }, (err, data) => {
        // 1234
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          let token = "visitor";
          if (data.isVerified === 1) {
            token = jwt.sign(
              {
                id: data.id,
                email: data.email,
                pseudo: data.pseudo,
                imguser: data.imguser,
                isVerified: data.isVerified,
                isBan: data.isBan,
                isAdmin: data.isAdmin,
              },
              process.env.SIGN_JWT,
              { expiresIn: "1h" }
            );

            return res.status(200).send({
              success: "success",
              flash: "Login Success!",
              token,
            });
          } else
            return res.status(202).send({
              success: "no",
              flash: data,
              token: "no",
            });
        }
      });
    } catch (error) {
      throw error;
    }
  }
  async checkToken(req, res) {
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
          id: user.id,
          pseudo: user.pseudo,
          email: user.email,
          imguser: user.imguser,
          isVerified: user.isVerified,
          isAdmin: user.isAdmin,
          isBan: user.isBan,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async editPassword(req, res) {
    const { email, password } = req.body;
    let userObj = new User({
      id: Number(req.params.id),
      email: String(email),
      password: String(password),
    });
    try {
      User.editPassword(userObj, (error, data) => {
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

  async verifMail(req, res) {
    nodemailer.verifMail(req, res);
  }
}

module.exports = UserController;
