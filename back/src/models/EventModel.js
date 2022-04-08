/*
 *
 * Model de 'Event'
 ******************************/
const connection = require("../config/ConnectionDB");

class Event {
  constructor(evenements) {
    (this.id = Number(evenements.id)),
      (this.title = String(evenements.title)),
      (this.content = String(evenements.content)),
      (this.date = String(evenements.date)),
      (this.heure = String(evenements.heure));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM evenements`, (error, data) => {
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
          SELECT * FROM evenements WHERE id = :id
      `,{id},
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
    const { title,content,date,heure} = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO evenements SET title= :title, content= :content , date= :date, heure= :heure
      `,{title,content,date,heure},
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM evenements`, (error, data) => {
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
    const { title, content,date,heure, id } = this;
    console.log("edit", typeof id);
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `UPDATE evenements
                      SET title = :title,
                          content = :content,
                          date = :date,
                          heure= :heure
                      WHERE id = :id;
          `,{title,content,date,heure,id},
          (error, d) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM evenements`, (error, data) => {
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
        conn.query(`DELETE FROM evenements WHERE id = :id`,{id}, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM evenements`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}

module.exports = Event;
