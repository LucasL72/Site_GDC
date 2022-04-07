import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DangerousIcon from "@mui/icons-material/Dangerous";
import EditIcon from "@mui/icons-material/Edit";
import ModalEditUser from "../../Modals/ModalEditUser";
import ModalDelete from "../../Modals/ModalDelete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { red } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import ModalBan from "../../Modals/ModalBan";

const LIgneUsers = (props) => {
  const [modalEditUserShow, setModalEditUserShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const [modalBanShow, setModalBanShow] = React.useState(false);
  const { item } = props;
  return (
    <tr>
      <td>
        <CheckCircleOutlineIcon color="success" />{" "}
        <RemoveCircleIcon sx={{ color: red[500] }} />
      </td>
      <td>{item.imguser}</td>
      <td>{item.pseudo}</td>
      <td>{item.email}</td>
      <td>{item.prenom}</td>
      <td>{item.nom}</td>
      <td>{item.adresse}</td>
      <td>{item.city}</td>
      <td>{item.postal}</td>
      <td>
        <a onClick={() => setModalEditUserShow(true)}>
          <EditIcon color="success" />
        </a>{" "}
        <a onClick={() => setModalDelShow(true)}>
          <DangerousIcon sx={{ color: orange[500] }} />
        </a>{" "}
        <a onClick={() => setModalBanShow(true)}>
          <RemoveCircleIcon sx={{ color: red[500] }} />
        </a>
        <ModalEditUser
          show={modalEditUserShow}
          onHide={() => setModalEditUserShow(false)}
          item={item}
        />
        <ModalDelete
          show={modalDelShow}
          onHide={() => setModalDelShow(false)}
          item={item}
        />
        <ModalBan
          show={modalBanShow}
          onHide={() => setModalBanShow(false)}
          item={item}
        />
      </td>
    </tr>
  );
};

export default LIgneUsers;
