import React from "react";
import ListArticle from "../components/Blog/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import MainLayout from "../layouts/MainLayout";

const Blog = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div>
      <MainLayout>
        <div>
          <h2 className="text-center ssligne">Nos Articles</h2>
          <ListArticle list={listArticles} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Blog;
