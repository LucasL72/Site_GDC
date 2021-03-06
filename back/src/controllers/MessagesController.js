const Message = require("../models/MessagesModel");
const nodemailer = require("../config/Nodemailer");

class MessagesController {
  async getAll(req, res) {
    try {
      const newMessage = new Message({});
      newMessage
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbMessages: data,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    const { email, author, content } = req.body;
    let newMessage = new Message({
      email: email,
      content: content,
      author: author,
    });
    try {
      newMessage
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Message Success !",
            dbMessages: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    let messObj = new Message({
      id: req.params.id,
      email: email,
      content: content,
      author: author,
    });
    try {
      messObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "get message Success !",
          dbMessages: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      let messObj = new Message({
        id: req.params.id,
      });
      messObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete message Success !",
          dbMessages: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  // POST MESSAGE
  async replyMessage(req, res) {
    const { email, author} = req.body;
    let messObj = new Message({
      id: req.params.id,
      email: email,
      author: author,
    });
    try {
      messObj.replyMessage().then((data) => {
        nodemailer.replyMessage(req, res);
        return res.send({
          message: "Error",
          dbMessages: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MessagesController;
