const fs = require("fs");

module.exports = {
  // Fonction pour effacer un fichier via son path
  removeFile: function (file) {
    fs.unlink(file, (err) => {
      if (err) console.log("callback fs error ", err);
      else {
        return file;
      }
    });
  },
};
