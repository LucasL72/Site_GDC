import React from "react";
import CreateArt from "../CreateArt";
import ListArticle from "../../Blog/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../../store/actions/ArticlesActions";
import EditComs from "../EditComs";

const GestionBlog = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <div>
      <CreateArt />
      <ListArticle list={listArticles} />
      <EditComs />
    </div>
  );
};

export default GestionBlog;
