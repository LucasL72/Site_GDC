import React from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalAnswer from "../../Modals/ModalAnswer";
import ModalDeleteMess from "../../Modals/ModalDelete/ModalDeleteMess";
import Moment from "react-moment";
import "moment-timezone";

const LigneMess = (props) => {
  const [modalAnswerShow, setModalAnswerShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  return (
    <>
      <tr>
        <td>{item.author}</td>
        <td>
          {" "}
          <a href={"mailto:" + item.email} target="_blank" rel="noreferrer">
            {item.email}
          </a>
        </td>
        <td>{item.content}</td>
        <td>
          {" "}
          <Moment tz="Europe/Paris" format="DD MMMM YYYY à HH:mm">
            {item.datemess}
          </Moment>{" "}
        </td>
        <td>
          {/* 
           // Réponse par email en cours
          <button onClick={() => setModalAnswerShow(true)}>
            <QuestionAnswerIcon />
          </button>{" "}
          */}
          <a onClick={() => setModalDelShow(true)}>
            <DeleteForeverIcon />
          </a>
        </td>
      </tr>
      {/*
      // Réponse par email en cours
      <ModalAnswer
        show={modalAnswerShow}
        onHide={() => setModalAnswerShow(false)}
        item={item}
      />
      */}
      <ModalDeleteMess
        show={modalDelShow}
        onHide={() => setModalDelShow(false)}
        item={item}
      />
    </>
  );
};

export default LigneMess;
