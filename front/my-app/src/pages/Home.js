import React from "react";
import ContForm from "../components/Contact/ContForm";
import Banner from "../components/core/Banner";
import Accueil from "../components/Home/Accueil";
import MainLayout from "../layouts/MainLayout";
import ListArticle from "../components/Blog/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import Banner2 from "../components/core/Bannner2";

const Home = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div>
      <MainLayout>
        <Accueil />
        <Banner />
        <h2 className="text-center ssligne">A la une</h2>
        <ListArticle list={listArticles} />
        <Banner2 />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Home;
