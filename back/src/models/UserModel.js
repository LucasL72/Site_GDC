/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const bcrypt = require("bcrypt");
const help = require("../utils/help");

const User = function (user) {
  (this.id = user.id),
    (this.imguser = user.imguser),
    (this.pseudo = user.pseudo),
    (this.prenom = user.prenom),
    (this.nom = user.nom),
    (this.adresse = user.adresse),
    (this.city = user.city),
    (this.postal = user.postal),
    (this.email = user.email),
    (this.isBan = user.isBan),
    (this.isAdmin = user.isAdmin),
    (this.isVerified = user.isVerified),
    (this.password = user.password);
};

User.getAll = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM user`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

User.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `
          SELECT * FROM user WHERE id = :id
      `,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data);
        conn.release();
      }
    );
  });
};

User.create = function (newUser, result) {
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
  } = newUser;

  const hash = bcrypt.hashSync(password, 10);
  connection.getConnection(function (error, conn) {
    conn.query(
      `
          INSERT INTO user SET imguser=:imguser, pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
      `,
      { imguser, pseudo, prenom, nom, adresse, city, postal, email, hash },
      (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM user`, (error, data) => {
          if (error) throw error;
          result(null, data);
        });
        conn.release();
      }
    );
  });
};

User.editOne = function (userObj, result) {
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
    id,
  } = userObj;
  const hash = bcrypt.hashSync(password, 10);
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `UPDATE user
                      SET imguser=:imguser,pseudo= :pseudo , prenom=:prenom, nom= :nom, adresse= :adresse, city= :city, postal= :postal, email= :email, password= :hash
                      WHERE id = :id;
          `,
      { imguser, pseudo, prenom, nom, adresse, city, postal, email, hash, id },
      (error, d) => {
        if (error) throw error;
        conn.query(`SELECT * FROM user`, (error, data) => {
          if (error) throw error;
          result(null, data);
          conn.release();
        });
      }
    );
  });
};

User.BanUser = function (id) {
  let isBan;
  // console.log("Method BANNED Model User", user);
  //Declarations des constantes de user pour mysql
  connection.getConnection(function (error, conn) {
    if (error) throw error;
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

User.deleteOne = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT imguser
          FROM user WHERE id = :id`,
      { id },
      (error, data) => {
        const name = data[0].imguser;
        const dir = "./Public/Images/Users/";
        const image = dir + name;
        if (data[0].imguser) help.removeFile(image);
        conn.query(`DELETE FROM user WHERE id =:id`, { id }, (d) => {
          if (error) throw error;
          conn.query(`SELECT * FROM user`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
          });
        });
      }
    );
  });
};

User.login = function (user, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // check user if exist
    conn.query(
      `SELECT * FROM user where email = "${user.email}"`,
      (error, data) => {
        if (error) throw error;
        if (data.length <= 0) result(null, { message: "error" });
        // bcrypt (Compare hash.body with hash.db)
        else
          bcrypt.compare(
            user.password,
            data[0].password,
            function (err, check) {
              if (err) throw err;
              if (check) result(null, data[0]);
              else result(null, { message: "error" });
            }
          );
        conn.release();
      }
    );
  });
};

User.verify = function (data, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `UPDATE user SET isVerified = 1 WHERE email = '${data.to}'`,
      (error, info) => {
        if (error) throw error;
        else result(null, "L'utilisateur a bien été mis a jour!");
      }
    );
    conn.release();
  });
};

User.editPassword = function (userObj, result) {
  const { password, email } = userObj;
  const hash = bcrypt.hashSync(password, 10);
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `UPDATE user SET password = "${hash}" WHERE email= "${email}"`,
      (error, d) => {
        if (error) throw error;
        conn.query(`SELECT * FROM user`, (error, data) => {
          if (error) throw error;
          result(null, data);
          conn.release();
        });
      }
    );
  });
};
module.exports = User;
