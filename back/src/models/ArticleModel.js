/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const fs = require("fs");
const path = require("path");
const help = require("../utils/help");

class Article {
  constructor(article) {
    (this.id = Number(article.id)),
      (this.imgarticle = String(article.imgarticle)),
      (this.title = String(article.title)),
      (this.description = String(article.description)),
      (this.contenu = String(article.contenu)),
      (this.auteur = String(article.auteur)),
      (this.user_id = Number(article.user_id));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
          if (error) reject(error);
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
    const { imgarticle, title, description, contenu, auteur } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO articles SET  imgarticle=:imgarticle,title= :title, description=:description,contenu= :contenu,auteur= :auteur, user_id = "1";
      `,
          { imgarticle, title, description, contenu, auteur },
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

  editOne(reqfile, result) {
    const { title, description, id, contenu, auteur } = this;
    let pathImgarticle = "./Public/Images/Articles/",
      pathImgarticleDb = "/api/assets/Images/Articles/",
      pathImgarticlewebp = "",
      pathImgwebp = "";
    const dateImg = new Date().getTime();

    if (reqfile) {
      pathImgwebp =
        pathImgarticle +
        (reqfile.filename.split(".").slice(0, -1).join(".") + ".webp");

      pathImgarticlewebp = pathImgarticle + id + dateImg + ".webp";
      help.renameFile(pathImgwebp, pathImgarticlewebp).then((data) => {
        if (data) {
          const articleImg =
            pathImgarticleDb + "article_" + id + "_" + dateImg + ".webp";
          connection.getConnection(function (error, conn) {
            conn.query(
              `SELECT imgarticle
              FROM articles WHERE uid = :id`,
              { id },
              (error, data) => {
                if (error) throw error;
                const nameImgarticle = data[0].imgarticle.split("/")[5];
                const pathImgDbDel = pathImgarticle + nameImgarticle;
                if (data[0].imgarticle) help.removeFile(pathImgDbDel);

                conn.query(
                  `UPDATE articles 
                      SET imgarticle= :articleImg
                      title = :title,
                          description = :description,
                          contenu= :contenu,
                          auteur= :auteur,
                          user_id="1"
                      WHERE id = :id;
          `,
                  { id, articleImg, title, description, contenu, auteur },
                  (error, data) => {
                    if (error) reject(error);
                    conn.query(`SELECT * FROM articles`, (error, data) => {
                      if (error) throw error;
                      result(null, data[0]);
                    });
                  }
                );
              }
            );
            conn.release();
          });
        }
      });
    } else {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE articles 
                      SET title = :title,
                          description = :description,
                          contenu= :contenu,
                          auteur= :auteur,
                          user_id="1"
                      WHERE id = :id;
          `,
          { id, title, description, contenu, auteur },
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM articles`, (error, data) => {
              if (error) throw error;
              result(null, data[0]);
            });
            conn.release();
          }
        );
      });
    }
  }

  deleteOne() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM articles WHERE id = ${id}`, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM articles`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}

module.exports = Article;
