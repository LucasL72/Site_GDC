import React from "react";
import GestionBlog from "../../components/Admin/AdminPages/GestionBlog";
import AdminLayout from "../../layouts/AdminLayout";

const AdminBlog = () => {
  return (
    <div>
      <AdminLayout>
        <GestionBlog />
      </AdminLayout>
    </div>
  );
};

export default AdminBlog;
