let MySQL = require("mysql");
const dbOptions = require("./db");
const util = require("util");

conn = MySQL.createPool({ ...dbOptions });

conn.config.connectionConfig.queryFormat = function (query, values) {
  if (!values) return query;
  // repere les singles quote et double quote pour les saisr dans la db
  return query.replace(
    /:(\w+)/g,
    function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this)
  );
};

let getConnection = function (done) {
  conn.getConnection(done);
  // Fonction async
conn.query = util.promisify(conn.query).bind(conn);
};

module.exports = { getConnection: getConnection };
