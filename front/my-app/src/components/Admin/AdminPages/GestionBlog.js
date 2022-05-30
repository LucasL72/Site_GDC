import React from "react";
import CreateArt from "../Blog/CreateArt";
import ListArticle from "../../Blog/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../../store/actions/ArticlesActions";


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
    </div>
  );
};

export default GestionBlog;
