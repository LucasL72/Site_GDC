const Event = require("../models/EventModel");

class EventController {
  async getAll(req, res) {
    try {
      const newEvent = new Event({});
      newEvent
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbEvents: data,
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
    const { title, content,date,heure } = req.body;
    let newEvent = new Event({
      title:title,
      content:content,
      date:date,
      heure:heure
    });
    try {
      newEvent
        .create()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbEvents: data,
          });
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    const { title, content,date,heure } = req.body;
    let eventObj = new Event({
      id:req.params.id,
      title: title,
      content:content,
      date:date,
      heure:heure
    });
    try {
      eventObj.editOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create event Success !",
          dbEvents: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    let eventObj = new Event({
      id:req.params.id,
    });
    try {
      eventObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "get event Success !",
          dbEvents: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      let eventObj = new Event({
        id:req.params.id,
      });
      eventObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete event Success !",
          dbEvents: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  
}

module.exports = EventController;