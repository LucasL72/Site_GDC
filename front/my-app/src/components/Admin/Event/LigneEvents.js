import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DangerousIcon from "@mui/icons-material/Dangerous";
import ModalEditEvent from "../../Modals/ModalEditEvent";
import ModalDeleteEvent from "../../Modals/ModalDelete/ModalDeleteEvent";

const LigneEvents = (props) => {
  const [modalEditEventShow, setModalEditEventShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  return (
    <>
      <tr>
        <td>{item.date}</td>
        <td>{item.heure}</td>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>
          <a onClick={() => setModalEditEventShow(true)}>
            <EditIcon sx={{ fontSize: 25 }} />
          </a>{" "}
          <a onClick={() => setModalDelShow(true)}>
            <DangerousIcon sx={{ fontSize: 25 }} color="success" />
          </a>
          <ModalEditEvent
            show={modalEditEventShow}
            onHide={() => setModalEditEventShow(false)}
            item={item}
          />
          <ModalDeleteEvent
            show={modalDelShow}
            onHide={() => setModalDelShow(false)}
            item={item}
          />
        </td>
      </tr>
    </>
  );
};

export default LigneEvents;
