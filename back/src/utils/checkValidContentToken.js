// import module connection de la base de données
const connection = require("../config/ConnectionDB");
const jwt = require("jsonwebtoken");

module.exports = {
  validContentToken: function (email, decoded) {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `SELECT * FROM user WHERE email = "${email}"`,
          (error, data) => {
            if (error) throw error;
            if (!data[0]) resolve();
            else if (
              data[0].id === decoded.id &&
              data[0].isVerified === decoded.isVerified &&
              data[0].isAdmin === decoded.isAdmin &&
              data[0].isBan === decoded.isBan
            ) {

              let token = "visitor";
              token = jwt.sign(
                {
                  id: data[0].id,
                  mail: data[0].mail,
                  isAdmin: data[0].isAdmin,
                  isVerified: data[0].isVerified,
                  isBan: data[0].isBan,
                },
                process.env.SIGN_JWT,
                { expiresIn: "1h" }
              );
              resolve(token);
            }
          }
        );
        conn.release();
      });
    });
  },
};