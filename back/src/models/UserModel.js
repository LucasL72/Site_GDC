/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const bcrypt = require("bcrypt");
const help = require("../utils/help");

class User {
  constructor(users) {
    (this.id = Number(users.id)),
      (this.imguser = String(users.imguser)),
      (this.pseudo = String(users.pseudo)),
      (this.prenom = String(users.prenom)),
      (this.nom = String(users.nom)),
      (this.adresse = String(users.adresse)),
      (this.city = String(users.city)),
      (this.postal = String(users.postal)),
      (this.email = String(users.email)),
      (this.isBan = Boolean(users.isBan)),
      (this.password = String(users.password));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM user`, (error, data) => {
          if (error) reject(error);
          console.log("model data", data);
          resolve(data);
          // Mettre fin à la connexion avec la db
          conn.release();
        });
      });
    });
  }

  getById() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `
          SELECT * FROM user WHERE id = :id
      `,
          { id },
          (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          }
        );
      });
    });
  }

  create() {
    console.log("model create", this);
    const {
      imguser,
      pseudo,
      prenom,
      nom,
      adresse,
      city,
      postal,
      email,
      password,
    } = this;
    const hash = bcrypt.hashSync(password, 10);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO user SET imguser= :imguser, pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
      `,
          { imguser, pseudo, prenom, nom, adresse, city, postal, email, hash },
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM user`, (error, data) => {
              if (error) reject(error);
              resolve(data);
              conn.release();
            });
          }
        );
      });
    });
  }

  editOne() {
    const {imguser, pseudo, prenom, nom, adresse, city, postal, email, password, id } =
      this;
    const hash = bcrypt.hashSync(password, 10);
    console.log("edit", typeof id);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE user
                      SET imguser=:imguser,pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
                      WHERE id = :id;
          `,
          { imguser,pseudo, prenom, nom, adresse, city, postal, email, hash, id },
          (error, d) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM user`, (error, data) => {
              if (error) reject(error);
              resolve(data);
              conn.release();
            });
          }
        );
      });
    });
  }

  BanUser = function () {
    let isBan;
    // console.log("Method BANNED Model User", user);
    //Declarations des constantes de user pour mysql
    const { id } = this;
    connection.getConnection(function (error, conn) {
      // console.log("MODEL: isBanned id", id);
      // Selection de la valeur bool de la table pour l'update
      conn.query(
        "select isBan from user where id = :id",
        { id },
        (error, data) => {
          if (error) throw error;
          // Recupérer l'ancien état de la valeur afin de la modifier
          isBan = data[0].isBan === 1 ? 0 : 1;
          // console.log("isBanned data value");
          //ici on fait la requete SQL avec les datas déclarées en const au début de la fonction
          conn.query(
            `UPDATE user 
              set 
              isBan = :isBan
              WHERE id = :id;
         `,
            //ici on déclare les values qui vont être envoyées dans la fonction queryFormat pour la gestion des single quotes
            // situé dans ConnectionDb.js dans dossier config
            { isBan, id },
            (error, data) => {
              // console.log("MODEL BOOL:", isBanned, id);
              if (error) throw error;
              conn.query(
                `SELECT * FROM user;
      `,
                (error, data) => {
                  //   Si erreur l'afficher
                  if (error) throw error;
                  //   Sinon afficher les datas
                  else null, data;
                }
              );
              // console.log("data", data);
            }
          );
        }
      );
      conn.release();
    });
  };

  deleteOne() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT imguser
          FROM user WHERE id = :id`,
          { id },
          (error, data) => {
            const name = data[0].imguser;
            console.log(data[0].imguser);
            const dir = "./Public/Images/Users/";
            const image = dir + name;
            if (data[0].imguser) help.removeFile(image);
            conn.query(`DELETE FROM user WHERE id =:id`, { id }, (d) => {
              if (error) reject(error);
              conn.query(`SELECT * FROM user`, (error, data) => {
                if (error) reject(error);
                resolve(data);
                conn.release();
              });
            });
          }
        );
      });
    });
  }
}

module.exports = User;
