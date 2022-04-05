import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import LigneEvents from "./LigneEvents";

const TablEvents = (props) => {
  const { list } = props;
  return (
    <div>
      <Container>
        <Table striped bordered hover variant="success" responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Gérer</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 &&
              list.map((item) => {
                return <LigneEvents item={item} />;
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TablEvents;
