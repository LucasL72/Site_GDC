import React from "react";
import Container from "react-bootstrap/Container";
import AdminLayout from "../../layouts/AdminLayout";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <h2 className="text-center ssligne">Accueil Admin</h2>
        <Container>
          <div className="text-center">
            <a
              href="https://grainedecitoyenmlg.nohost.me/nextcloud/login"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lien collaboratif
            </a>
          </div>
          <p className="text-muted text-center">Identifiant : "membre" </p>
          <p className="text-muted text-center">Mot de passe : "grainedecitoyen"</p>
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Admin;
