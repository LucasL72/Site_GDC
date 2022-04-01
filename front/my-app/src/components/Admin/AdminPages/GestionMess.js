import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalAnswer from "../../Modals/ModalAnswer";

const GestionMess = () => {
  const [modalAnswerShow, setModalAnswerShow] = React.useState(false);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">Gestion des Messages</h1>
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
            <tr>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <a onClick={() => setModalAnswerShow(true)}>
                  <QuestionAnswerIcon />
                </a>{" "}
                <a>
                  <DeleteForeverIcon color="disabled" />
                </a>
              </td>
            </tr>
            <ModalAnswer
              show={modalAnswerShow}
              onHide={() => setModalAnswerShow(false)}
            />
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default GestionMess;
