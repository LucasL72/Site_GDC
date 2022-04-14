/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const fs = require("fs");
const path = require("path");
const help = require("../utils/help");

class Article {
  constructor(articles) {
    (this.id = Number(articles.id)),
      (this.imgarticle = String(articles.imgarticle)),
      (this.title = String(articles.title)),
      (this.description = String(articles.description)),
      (this.contenu = String(articles.contenu)),
      (this.auteur = String(articles.auteur)),
      (this.user_id = Number(articles.user_id));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM articles;`, (error, data) => {
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
          SELECT * FROM articles WHERE id = :id;
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
    const { title, description, contenu, auteur, imgarticle } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO articles SET  imgarticle=:imgarticle,title= :title, description=:description,contenu= :contenu,auteur= :auteur, user_id = "1";
      `,
          { imgarticle, title, description, contenu, auteur },
          (error, data) => {
            if (error) reject(error);
            conn.query(
              `SELECT imgarticle, title,description,contenu,auteur FROM articles`,
              (error, data) => {
                if (error) reject(error);
                resolve(data);
                conn.release();
              }
            );
          }
        );
      });
    });
  }

  editOne(reqfile) {
    const { title, description, id, contenu, auteur } = this;
    return new Promise((resolve, reject) => {
      if (reqfile) {
        pathImgWebp =
          reqfile.filename.split(".").slice(0, -1).join(".") + ".webp";

        pathAvatarWebp = "article_" + id + "_" + dateImg + ".webp";

        help.renameFile(pathImgWebp, pathAvatarWebp).then((data) => {
          if (data) {
            const avatarImg = "article_" + id + "_" + dateImg + ".webp";

            connection.getConnection(function (error, conn) {
              conn.query(
                `SELECT imgarticle
              FROM articles WHERE id = :id`,
                { id },
                (error, data) => {
                  if (error) throw error;
                  const name = data[0].imgarticle;
                  console.log(data[0].imgarticle);
                  const dir = "./Public/Images/Articles/";
                  const image = dir + name;
                  if (data[0].imgarticle) help.removeFile(image);
                  conn.query(
                    `UPDATE articles 
                      SET imgarticle= :avatarimg
                      title = :title,
                          description = :description,
                          contenu= :contenu,
                          auteur= :auteur,
                          user_id="1"
                      WHERE id = :id;
          `,
                    { avatarImg, title, description, contenu, auteur, id },
                    (error, data) => {
                      if (error) reject(error);
                      conn.query(
                        `SELECT * FROM articles WHERE id= :id`,
                        { id },
                        (error, data) => {
                          if (error) throw error;
                          result(null, data[0]);
                        }
                      );
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
            { title, description, contenu, auteur, id },
            (error, data) => {
              if (error) throw error;
              conn.query(
                `SELECT * FROM articles WHERE id= :id`,
                { id },
                (error, data) => {
                  if (error) throw error;
                  result(null, data[0]);
                }
              );
              conn.release();
            }
          );
        });
      }
    });
  }

  deleteOne() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT imgarticle
          FROM articles WHERE id = :id`,
          { id },
          (error, data) => {
            const name = data[0].imgarticle;
            console.log(data[0].imgarticle);
            const dir = "./Public/Images/Articles/";
            const image = dir + name;
            if (data[0].imgarticle) help.removeFile(image);
            conn.query(`DELETE FROM articles WHERE id = ${id}`, (d) => {
              if (error) reject(error);
              conn.query(`SELECT * FROM articles`, (error, data) => {
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

module.exports = Article;
