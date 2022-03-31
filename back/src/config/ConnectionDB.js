let MySQL = require("mysql");
const dbOptions = require("./db");

connectionPool = MySQL.createPool({ ...dbOptions });

let getConnection = function (done) {
  connectionPool.getConnection(done);
};

module.exports = { getConnection: getConnection };
