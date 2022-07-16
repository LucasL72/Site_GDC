import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DangerousIcon from "@mui/icons-material/Dangerous";
import EditIcon from "@mui/icons-material/Edit";
import ModalEditUser from "../../Modals/ModalEditUser";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { red } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import ModalBan from "../../Modals/ModalBan";
import ModalDeleteUser from "../../Modals/ModalDelete/ModalDeleteUser";
import { urlImgUsers } from "../../../utils/url";

const LIgneUsers = (props) => {
  const [modalEditUserShow, setModalEditUserShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const [modalBanShow, setModalBanShow] = React.useState(false);
  const { item } = props;

  if (item.isBan === 1) {
    return (
      <tr>
        <td>
          <RemoveCircleIcon sx={{ color: red[500] }} />
        </td>
        <td>
          <img
            src={`${urlImgUsers + item.imguser}`}
            alt={item.pseudo}
            width="50"
            height="50"
          ></img>
        </td>
        <td>{item.pseudo}</td>
        <td>{item.email}</td>
        <td>{item.prenom}</td>
        <td>{item.nom}</td>
        <td>{item.adresse}</td>
        <td>{item.city}</td>
        <td>{item.postal}</td>
        <td>
          {/*
          <a onClick={() => setModalEditUserShow(true)}>
            <EditIcon color="success" />
          </a>{" "} */}
          <a onClick={() => setModalDelShow(true)}>
            <DangerousIcon sx={{ color: orange[500] }} />
          </a>{" "}
          <a onClick={() => setModalBanShow(true)}>
            <RemoveCircleIcon sx={{ color: red[500] }} />
          </a>
          {/*
          <ModalEditUser
            show={modalEditUserShow}
            onHide={() => setModalEditUserShow(false)}
            item={item}
          />
          */}
          <ModalDeleteUser
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
  } else if ((item.isBan === 0) & (item.isAdmin === 1)) {
    return (
      <tr>
        <td>
          <CheckCircleOutlineIcon color="success" /> <p>Admin</p>
        </td>
        <td>
          <img
            src={`${urlImgUsers + item.imguser}`}
            alt={item.pseudo}
            width="50"
            height="50"
          ></img>
        </td>
        <td>{item.pseudo}</td>
        <td>{item.email}</td>
        <td>{item.prenom}</td>
        <td>{item.nom}</td>
        <td>{item.adresse}</td>
        <td>{item.city}</td>
        <td>{item.postal}</td>
        <td>
          {/*
          <a onClick={() => setModalEditUserShow(true)}>
            <EditIcon color="success" />
    </a>{" "} */}
          <a onClick={() => setModalDelShow(true)}>
            <DangerousIcon sx={{ color: orange[500] }} />
          </a>{" "}
          <a onClick={() => setModalBanShow(true)}>
            <RemoveCircleIcon sx={{ color: red[500] }} />
          </a>
          {/*
          <ModalEditUser
            show={modalEditUserShow}
            onHide={() => setModalEditUserShow(false)}
            item={item}
  /> */}
          <ModalDeleteUser
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
  } else if (item.isBan === 0) {
    return (
      <tr>
        <td>
          <CheckCircleOutlineIcon color="success" />{" "}
        </td>
        <td>
          <img
            src={`${urlImgUsers + item.imguser}`}
            alt={item.pseudo}
            width="50"
            height="50"
          ></img>
        </td>
        <td>{item.pseudo}</td>
        <td>{item.email}</td>
        <td>{item.prenom}</td>
        <td>{item.nom}</td>
        <td>{item.adresse}</td>
        <td>{item.city}</td>
        <td>{item.postal}</td>
        <td>
          {/*
          <a onClick={() => setModalEditUserShow(true)}>
            <EditIcon color="success" />
    </a>{" "} */}
          <a onClick={() => setModalDelShow(true)}>
            <DangerousIcon sx={{ color: orange[500] }} />
          </a>{" "}
          <a onClick={() => setModalBanShow(true)}>
            <RemoveCircleIcon sx={{ color: red[500] }} />
          </a>
          {/*
          <ModalEditUser
            show={modalEditUserShow}
            onHide={() => setModalEditUserShow(false)}
            item={item}
  /> */}
          <ModalDeleteUser
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
  }
};

export default LIgneUsers;
