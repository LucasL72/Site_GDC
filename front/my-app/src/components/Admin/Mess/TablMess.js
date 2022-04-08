import React from "react";
import Table from "react-bootstrap/Table";
import LigneMess from "./LigneMess";

const TablMess = (props) => {
  const { list } = props;
  return (
    <>
      <Table striped bordered hover variant="success" responsive>
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date d'envoi</th>
            <th>Gérer</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((item) => {
              return <LigneMess item={item} />;
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TablMess;
