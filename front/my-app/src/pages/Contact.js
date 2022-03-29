import React from "react";
import ContForm from "../components/Contact/ContForm";
import Nous from "../components/Contact/Nous";
import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <Nous />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Contact;
