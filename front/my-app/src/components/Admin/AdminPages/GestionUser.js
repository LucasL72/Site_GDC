import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DangerousIcon from "@mui/icons-material/Dangerous";
import EditIcon from "@mui/icons-material/Edit";
import ModalEditUser from "../../Modals/ModalEditUser";

const GestionUser = () => {
  const [modalEditUserShow, setModalEditUserShow] = React.useState(false);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">Gestion des Utilisateurs</h1>
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
            <tr>
              <td>
                <CheckCircleOutlineIcon sx={{ fontSize: 40 }} color="success" />{" "}
                <DangerousIcon sx={{ fontSize: 40 }} color="secondary" />
              </td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <a onClick={() => setModalEditUserShow(true)}>
                  <EditIcon sx={{ fontSize: 25 }} />
                </a>{" "}
                <a>
                  <DangerousIcon sx={{ fontSize: 25 }} color="secondary" />
                </a>{" "}
                <a>
                  <DangerousIcon sx={{ fontSize: 25 }} color="success" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <CheckCircleOutlineIcon sx={{ fontSize: 40 }} color="success" />{" "}
                <DangerousIcon sx={{ fontSize: 40 }} color="secondary" />
              </td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <a onClick={() => setModalEditUserShow(true)}>
                  <EditIcon sx={{ fontSize: 25 }} />
                </a>{" "}
                <a>
                  <DangerousIcon sx={{ fontSize: 25 }} color="secondary" />
                </a>{" "}
                <a>
                  <DangerousIcon sx={{ fontSize: 25 }} color="success" />
                </a>
              </td>
            </tr>
            <ModalEditUser
              show={modalEditUserShow}
              onHide={() => setModalEditUserShow(false)}
            />
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default GestionUser;
