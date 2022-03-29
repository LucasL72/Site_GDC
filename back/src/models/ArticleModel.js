/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

class Article {
  constructor(article) {
    (this.id = article.id),
      (this.title = article.title),
      (this.description = article.description);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
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
          SELECT * FROM articles WHERE id = ${id}
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
    const { title, description} = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO articles (title, description)
          VALUES ("${title}", "${description}")
      `,
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM articles`, (error, data) => {
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
    const { title, description, id } = this;
    console.log("edit", typeof id);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`UPDATE articles 
                      SET title = '${title}',
                          description = "${description}"
                      WHERE id = ${id};
          `, (error, d) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM articles`, (error, data) => {
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
    const { id } = this
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM articles WHERE id = ${id}`, (d) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM articles`, (error, data) => {
              if (error) reject(error);
              resolve(data);
              conn.release();
            });
          }
        );
      });
    });
  }
}

module.exports = Article;