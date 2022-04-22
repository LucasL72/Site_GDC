/*
 *
 * Model de 'Event'
 ******************************/
const connection = require("../config/ConnectionDB");


class Message {
  constructor(messages) {
    (this.id = Number(messages.id)),
      (this.email = String(messages.email)),
      (this.content = String(messages.content)),
      (this.author = String(messages.author));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM messages`, (error, data) => {
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
          SELECT * FROM messages WHERE id = :id
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
    console.log("model create messages", this);
    const { email, content, author } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO messages SET email= :email, content= :content, author= :author;
      `,
          { email, content, author },
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM messages`, (error, data) => {
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
        conn.query(`DELETE FROM messages WHERE id = :id`, { id }, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM messages`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }

  replyMessage() {
    const { email } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `
          SELECT author,email FROM messages WHERE email = :email
      `,
          { email },
          (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          }
        );
      });
    });
  }
}

module.exports = Message;
