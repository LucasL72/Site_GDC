const fs = require("fs");
const path = require("path");

module.exports = {
  // Fonction pour effacer un fichier via son path
  removeFile: function (dir, file) {
    fs.unlink(path.join(dir, file), (err) => {
      if (err) console.log(err);
      else console.log("delete file OK", file);
    });
  },
};
