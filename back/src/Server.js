const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const helmet = require("helmet");

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  run() {
    // Cors
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://www.grainedecitoyenmontgesnois.fr",
          "http://www.grainedecitoyenmontgesnois.fr",
          "grainedecitoyenmontgesnois.fr",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );
      // Disable header express default
    this.app.disable("x-powered-by");

    // this.app.use(helmet())
    // hidePoweredBy() => disable("x-powered-by")
    this.app.use(helmet.hidePoweredBy());
    // contentSecurityPolicy() => Cela aide à prévenir les attaques de scripts intersites
    this.app.use(helmet.contentSecurityPolicy());
    // Body Parser
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );
  

    // Express static permet de diriger un chemin sur un dossier en particulier
    this.app.use("/api/assets", express.static("Public"));
    // Routes
    this.app.use(router);

    // Run app
    return this.app.listen(this.port, () => {
      try {
        console.log(`server is running on ${this.port} ...🚀`);
      } catch (error) {
        throw error;
      }
    });
  }
}

module.exports = Server;
