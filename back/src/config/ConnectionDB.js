let MySQL = require("mysql");
const dbOptions = require("./db");
const util = require("util");

db = MySQL.createPool({ ...dbOptions });

db.config.connectionConfig.queryFormat = function (query, values) {
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
  db.getConnection(done);
  // Fonction async
db.query = util.promisify(db.query).bind(db);
};

module.exports = { getConnection: getConnection };
