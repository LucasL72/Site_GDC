import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import Forms from "../components/Blog/Forms";
import ListArticle from "../components/Blog/ListArticle";
import Container from "react-bootstrap/Container";
import AdminLayout from "../layouts/AdminLayout";

const Admin = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    console.log("effect getArticles");
    dispatch(getArticles());
  }, []);

  console.log("selectors article", listArticles);
  return (
    <div>
      <AdminLayout>
        <Container>
          <h2 className="text-center ssligne">Admin</h2>
          <a
            href="https://grainedecitoyenmlg.nohost.me/nextcloud/login"
            target="_blank"
          >
            {" "}
            Lien collaboratif
          </a>
          <Forms />
          <ListArticle list={listArticles} />
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Admin;
