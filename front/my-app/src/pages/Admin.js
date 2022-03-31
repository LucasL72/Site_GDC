import React from "react";
import Container from "react-bootstrap/Container";
import AdminLayout from "../layouts/AdminLayout";
import GestionBlog from "../components/Admin/AdminPages/GestionBlog";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <Container>
          <div className="text-center">
            <a
              href="https://grainedecitoyenmlg.nohost.me/nextcloud/login"
              target="_blank"
            >
              {" "}
              Lien collaboratif
            </a>
          </div>
          <GestionBlog />
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Admin;
