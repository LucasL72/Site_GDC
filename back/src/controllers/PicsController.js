const Photo = require("../models/picsModel");
const help = require("../utils/help");
const fs = require("fs");
const path = require('path');

class PicsControllers {
  async getAll(req, res) {
    try {
      const newPhoto = new Photo({});
      newPhoto
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbPics: data,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    let PhotoObj = new Photo({
      id: Number(req.params.id),
    });
    try {
      PhotoObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create Article Success !",
          dbPics: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
  async create(req, res) {
    const {authorname } = req.body;
    const photo = "/api/assets/Images/Album/" + req.file.filename.split('.').slice(0, -1).join('.') + ".webp";
    let newPhoto = new Photo({
      idphotos: Number(req.params.idphotos),
      photo: String(photo),
     authorname:authorname,
    });
    try { 
      newPhoto
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create pic Success !",
            dbPics: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

 

  async deleteOne(req, res) {
    try {
      let PhotoObj = new Photo({
        id: Number(req.params.id),
      });
      PhotoObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create Article Success !",
          dbPics: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteAll(req, res) {
    try {
      return res.send("OK");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PicsControllers;
