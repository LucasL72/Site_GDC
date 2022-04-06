import React from "react";
import Table from "react-bootstrap/Table";
import LIgneUsers from "./LIgneUsers";

const TablUsers = (props) => {
  const { list } = props;
  return (
    <div>
      <Table striped bordered hover variant="success" responsive>
        <thead>
          <tr>
            <th>Statut</th>
            <th>Image de Profil</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Gérer Profil</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((item) => {
              return <LIgneUsers item={item} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default TablUsers;
