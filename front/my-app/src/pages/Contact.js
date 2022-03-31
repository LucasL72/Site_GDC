import React from "react";
import ContForm from "../components/Contact/ContForm";
import Nous from "../components/Contact/Nous";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/core/Banner";

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <Nous />
        <Banner />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Contact;
