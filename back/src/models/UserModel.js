/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const bcrypt = require("bcrypt");

class User {
  constructor(users) {
    (this.id = Number(users.id)),
      (this.imguser = String(users.imguser)),
      (this.pseudo = String(users.pseudo)),
      (this.prenom = String(users.prenom)),
      (this.nom = String(users.nom)),
      (this.adresse = String(users.adresse)),
      (this.city = String(users.city)),
      (this.postal = Number(users.postal)),
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
    const { pseudo, prenom, nom, adresse, city, postal, email, password } =
      this;
    const hash = bcrypt.hashSync(password, 10);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO user SET imguser= "image", pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
      `,
          { pseudo, prenom, nom, adresse, city, postal, email, hash },
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
    const { pseudo, prenom, nom, adresse, city, postal, email, password, id } =
      this;
    const hash = bcrypt.hashSync(password, 10);
    console.log("edit", typeof id);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE user
                      SET imguser="image",pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
                      WHERE id = :id;
          `,
          { pseudo, prenom, nom, adresse, city, postal, email, hash, id },
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

  Ban() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE user SET isBan = 1 WHERE id =:id ;`,
          { id },
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
  Unban() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE user SET isBan= 0 WHERE id = :id;
          `,
          { id },
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

  deleteOne() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM user WHERE id =:id`, { id }, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM user`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}

module.exports = User;
