import React from "react";
import EditUser from "../components/Register/EditUser";
import MainLayout from "../layouts/MainLayout";

const Profile = () => {
  return (
    <div>
      <MainLayout>
      <h2 className="text-center ssligne">Mon Profil</h2>
      <EditUser />
      </MainLayout>
    </div>
  );
};

export default Profile;
