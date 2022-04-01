import React from "react";
import GestionMess from "../../components/Admin/AdminPages/GestionMess";
import AdminLayout from "../../layouts/AdminLayout";

const AdminMess = () => {
  return (
    <div>
      <AdminLayout>
        <GestionMess />
      </AdminLayout>
    </div>
  );
};

export default AdminMess;
