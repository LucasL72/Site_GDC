import React from "react";
import Newuser from "../components/Register/Newuser";
import MainLayout from "../layouts/MainLayout";

const Register = () => {
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Créer un compte</h2>
        <Newuser />
      </MainLayout>
    </div>
  );
};

export default Register;
