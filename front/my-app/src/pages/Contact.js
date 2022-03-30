import React from "react";
import ContForm from "../components/Contact/ContForm";
import Nous from "../components/Contact/Nous";
import MainLayout from "../layouts/MainLayout";
import Banner2 from "../components/core/Bannner2";

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <Nous />
        <Banner2 />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Contact;
