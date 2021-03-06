/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const help = require("../utils/help");
const path = require("path");

const Article = function (articles) {
  (this.id = articles.id),
    (this.imgarticle = articles.imgarticle),
    (this.title = articles.title),
    (this.description = articles.description),
    (this.contenu = articles.contenu),
    (this.auteur = articles.auteur),
    (this.user_id = articles.user_id);
};

Article.getAll = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM articles ORDER BY id DESC ;`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

Article.getNews = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM articles ORDER BY dateart DESC LIMIT 2;`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

Article.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `
          SELECT * FROM articles WHERE id = :id;
      `,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data);
        conn.release();
      }
    );
  });
};

Article.create = function (newArticle, result) {
  const { imgarticle, title, description, contenu, auteur, user_id, id } =
    newArticle;
  connection.getConnection(function (error, conn) {
    conn.query(
      `INSERT INTO articles SET  imgarticle=:imgarticle,title= :title, description=:description,contenu= :contenu,auteur= :auteur, user_id = :user_id ;
      `,
      { imgarticle, title, description, contenu, auteur, user_id },
      (error, data) => {
        if (error) throw error;
        conn.query(
          `SELECT * FROM articles where id= :id`,
          { id },
          (error, data) => {
            if (error) throw error;
            result(null, data[0]);
          }
        );
        conn.release();
      }
    );
  });
};

Article.editOne = function (articleObj, result, reqfile) {
  const { title, contenu, description, auteur, id } = articleObj;

  let pathPic = "./Public/Images/Articles/",
    pathPicWebp = "",
    pathImgWebp = "";

  const dateImg = new Date().getTime();

  if (reqfile) {
    pathImgWebp =
      pathPic +
      (reqfile.filename.split(".").slice(0, -1).join(".") + ".webp");

    pathPicWebp = pathPic + "_" + dateImg + ".webp";

    help.renameFile(pathImgWebp, pathPicWebp).then((data) => {
      if (data) {
        const ArtImg = "_" + dateImg + ".webp";
        connection.getConnection(function (error, conn) {
          conn.query(
            `SELECT imgarticle
            FROM articles WHERE id = :id`,
            { id },
            (error, data) => {
              if (error) throw error;
              const namePic = data[0].imgarticle;
              const pathPicDbDel = pathPic + namePic;
              if (namePic != undefined) help.removeFile(pathPicDbDel);
              conn.query(
                `
                UPDATE articles
                SET title = :title,
                imgarticle =:ArtImg,
                description = :description,
                contenu = :contenu,
                auteur = :auteur,
                WHERE id = :id;
         `,
                {
                  title,
                  imgarticle,
                  ArtImg,
                  description,
                  contenu,
                  auteur,
                  id,
                },
                (error, data) => {
                  if (error) throw error;
                  conn.query(
                    `SELECT *
                FROM articles WHERE id = :id`,
                    { id },
                    (error, data) => {
                      if (error) throw error;
                      result(null, data[0]);
                    }
                  );
                }
              );
            }
          );
          conn.release();
        });
      }
    });
  } else {
    connection.getConnection(function (error, conn) {
      conn.query(
        `
        UPDATE articles
        SET title = :title,
        description = :description,
        contenu = :contenu,
        auteur = :auteur,
        WHERE id = :id;
  `,
        { title, description, contenu, auteur, id },
        (error, data) => {
          if (error) throw error;
          conn.query(
            `SELECT *
            FROM articles WHERE id = :id`,
            { id },
            (error, data) => {
              if (error) throw error;
              result(null, data[0]);
            }
          );
          conn.release();
        }
      );
    });
  }
};

Article.deleteOne = function (id, result) {
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT imgarticle
          FROM articles WHERE id = :id`,
      { id },
      (error, data) => {
        const name = data[0].imgarticle;
        const dir = "./Public/Images/Articles/";
        const image = dir + name;
        if (data[0].imgarticle) help.removeFile(image);
        conn.query(`DELETE FROM articles WHERE id = ${id}`, (data) => {
          if (error) throw error;
          conn.query(`SELECT * FROM articles`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
          });
        });
      }
    );
  });
};

module.exports = Article;
