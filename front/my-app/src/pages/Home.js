import React from "react";
import ContForm from "../components/Contact/ContForm";
import Banner from "../components/core/Banner";
import Accueil from "../components/Home/Accueil";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Accueil />
        <Banner />
        <h2 className="text-center ssligne">Actualités</h2>
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Home;
