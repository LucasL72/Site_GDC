import React from "react";
import ContForm from "../components/Contact/ContForm";
import Banner from "../components/core/Banner";
import Accueil from "../components/Home/Accueil";
import ListNews from "../components/Blog/ListNews";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../store/actions/ArticlesActions";
import { getEvent } from "../store/actions/EventActions";
import MainLayout from "../layouts/MainLayout";
import ListEvents from "../components/Admin/Event/ListEvents";

const Home = () => {
  const dispatch = useDispatch();
  const ListNew = useSelector((state) => state.articles.listArticles);
  const listEvents = useSelector((state) => state.events.listEvents);

  useEffect(() => {
    dispatch(getEvent());
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Accueil />
        <ListEvents list={listEvents} />
        <h2 className="text-center ssligne">A la une</h2>
        <ListNews list={ListNew} />
        <Banner />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Home;
