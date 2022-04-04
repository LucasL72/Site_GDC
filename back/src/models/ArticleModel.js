/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const fs = require("fs");
const path = require('path');
const {
  removeFile
} = require('../utils/help');

class Article {
  constructor(article) {
    (this.id = article.id),
    (this.imgarticle=article.imgarticle),
      (this.title = article.title),
      (this.description = article.description),
      (this.contenu = article.contenu),
      (this.auteur = article.auteur),
      (this.user_id = article.user_id);
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
    const {imgarticle,title, description,contenu,auteur} = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO articles SET  imgarticle=:imgarticle,title= :title, description=:description,contenu= :contenu,auteur= :auteur, user_id = "1";
      `,{imgarticle,title,description,contenu,auteur},
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
    const { title, description, id, contenu,auteur } = this;
    console.log("edit", typeof id);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`UPDATE articles 
                      SET title = :title,
                          description = :description,
                          contenu= :contenu,
                          auteur= :auteur,
                          user_id="1"
                      WHERE id = :id;
          `,{id,title,description,contenu,auteur}, (error, d) => {
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