const Albums = require("../models/PicsModel");
const help = require("../utils/help");

class PicsController {
  async getAll(req, res) {
    try {
      const newPhoto = new Albums({});
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
    let PhotoObj = new Albums({
      idphotos: Number(req.params.idphotos),
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
    const id = req.params.id;
    const photo = req.file.filename.split('.').slice(0, -1).join('.') + ".webp";
    let newPhoto = new Albums({
      id: Number(id),
      photo: photo,
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
      let photoObj = new Albums({
        id: Number(req.params.id),
      });
      photoObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete pics Success !",
          dbPics: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = PicsController;
