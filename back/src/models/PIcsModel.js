/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const fs = require("fs");
const path = require("path");
const help = require("../utils/help");

class Photo {
  constructor(photos) {
    (this.idphotos = Number(photos.id)),
      (this.photo = String(photos.photo)),
      (this.authorname = String(photos.authorname)),
      (this.user_id = Number(photos.user_id));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM pics`, (error, data) => {
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
          SELECT * FROM pics WHERE idphotos = :id
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
    const { photo,authorname,id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO pics SET  photo=:photo,authorname= :authorname,  user_id = "5";
      `,
          {photo,authorname,id},
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT photo,authorname FROM pics`, (error, data) => {
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
    const dir = path.join("./Public/Images/Album");
    help.removeFile(dir, this.photo);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM pics WHERE idphotos = ${id}`, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM pics`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
  deleteAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM pics`, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM pics`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}

module.exports = Photo;