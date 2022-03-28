import React from "react";
import Contact from "../components/Contact";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Accueil</h2>
        <h2 className="text-center ssligne">Actualités</h2>
        <Contact />
      </MainLayout>
    </div>
  );
};

export default Home;
