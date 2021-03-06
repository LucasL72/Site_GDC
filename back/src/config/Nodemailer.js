/*
 *  Nodemailer
 * **************** */
// import nodemailer
const user = require("../models/UserModel");
const nodemailer = require("nodemailer");
require("dotenv").config();
// Déclaration ne notre transporter
// C'est en quelque sorte notre connexion à notre boite mail
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: "587",
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MDP_MAIL,
  },
});

let rand, host, link, mailOptions;

module.exports = {
  SendMessage: (req, res) => {
    const mailOptions = {
      from: process.env.MAIL,
      to: req.body.email,
      subject: "Bonjour " + req.body.author + " !",
      html: `
        <h2>${req.body.message}</h2>
      `,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(500).json({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        res.json({
          method: req.method,
          status: "success",
          message: "Email SEND !!! ",
        });
      }
    });
  },

  VerifUser: (req, res) => {
    rand = Math.floor(Math.random() * 100 + 54);
    host = process.env.URL;

    link = host + "/api/auth/verify/" + rand;

    const mailOptions = {
      from: process.env.MAIL,
      to: req.body.email,
      subject: "Vérification du compte, site Graine de Citoyen Montgesnois",
      rand: rand,
      html:
        `
      <strong>Félicitation, votre compte est créé !</strong>
      <br><br>
      <div>
        Pour finaliser votre inscription, il ne reste plus qu'a cliquer sur ce lien.
      </div>
      <a href=" ` +
        link +
        ` ">Cliquez ici pour vérifier votre compte</a>
      <br><br>
      <div> Cordialement, l'équipe de Graine de Citoyen Montgesnois </div>
     
      `,
    };
    // On demande à notre transporter d'envoyer notre mail
    transporter.sendMail(mailOptions, (err, info) => {
      console.log("mailoptions", mailOptions);
      if (err) {
        console.log("err", err),
          res.status(500).send({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        return res.json({
          method: req.method,
          status: "success",
          flash:
            "L'utilisateur a bien été créé. veuillez valider par mail pour pouvoir vous connecter!",
          mailoptions: mailOptions,
        });
      }
    });
  },
  verifMail: (req, res) => {
    // Ici on tcheck notre id du mail avec la variable enregistrer en cache (rand)
    if (String(req.params.id) == String(mailOptions.rand)) {
      try {
        user.verify(mailOptions, (err, data) => {
          if (err)
            res
              .status(500)
              .send({ flash: err.message || "Une erreur est survenue" });
          else
            return res.redirect(process.env.URL + "/verif/" + mailOptions.rand);
        });
      } catch (error) {
        throw error;
      }
    } else res.end("<h1>Bad Request</h1>");
  },

  lostpassword: (req, res) => {
    // génération d'un chiffre random
    rand = Math.floor(Math.random() * 100 + 54);
    // on definit notre host
    host = process.env.URL;
    // on définit le lien
    link = host + "/Lostpassword/" + rand;
    // et enfin notre mail
    mailOptions = {
      from: process.env.MAIL,
      to:req.body.email,
      subject: "Mot de passe oublié, site Graine de Citoyen Montgesnois",
      rand: rand,
      html:
        `
        <h1>Bonjour</h1>
        <h2>Encore un effort</h2><br>
        <h3>Cliquer sur le lien suivant afin de finir la procédure  de mot de passe oublié.</h3><br>
        <a href=" ` +
        link +
        ` ">Cliquez ici pour créer un nouveau mot de passe</a>
        <div> Cordialement, l'équipe de Graine de Citoyen Montgesnois </div>
      `,
    };
    // Et envoi notre mail avec nos callback
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(200).json({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        return res.json({
          method: req.method,
          status: "success",
          flash: "success mail new password!",
          mailoptions: mailOptions,
        });
      }
    });
  },

  replyMessage: (req, res) => {
    const mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.email,
      text: req.body.reply,
      html: `
      <h2 style="color:#ABC4FF;"> Bonjour,  ${req.body.author} </h2>
      </br> <p>${req.body.reply}</br></p>  
      <div style="display: flex;margin-bottom: 15px;">
      <div> Cordialement, l'équipe de Graine de Citoyen Montgesnois </div>
  `,
    };
    // console.log(mailOptions);
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(500).json({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        // console.log('callback res nodemail reply')
        res.json({
          method: req.method,
          status: "success",
          message: "Email SENDED !!! ",
        });
      }
    });
  },
};
