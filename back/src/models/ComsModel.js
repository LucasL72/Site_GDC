/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

class Commentaire {
  constructor(coms) {
    (this.id = Number(coms.id)),
      (this.content = String(coms.content)),
      (this.pseudouser = String(coms.pseudouser)),
      (this.user_id = Number(coms.user_id)),
      (this.articles_id = String(coms.articles_id));
  }
  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `SELECT * FROM  commentaires INNER JOIN articles ON commentaires.articles_id=articles.id ORDER BY commentaires.id DESC`,
          (error, data) => {
            if (error) reject(error);
            resolve(data);
            // Mettre fin à la connexion avec la db
            conn.release();
          }
        );
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
          SELECT content,pseudouser,user_id,articles_id FROM commentaires WHERE id = ${id};
      `,
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
    const { content,articles_id,pseudouser,user_id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO commentaires SET content = :content, pseudouser= :pseudouser, user_id= :user_id, articles_id= :articles_id;
      `,
          { content,articles_id,pseudouser,articles_id,user_id},
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM  commentaires INNER JOIN articles ON commentaires.articles_id=articles.id`, (error, data) => {
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
        conn.query(`DELETE FROM commentaires WHERE id = :id`, { id }, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM commentaires`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}

module.exports = Commentaire;
