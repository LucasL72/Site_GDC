import React from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalAnswer from "../../Modals/ModalAnswer";
import ModalDeleteMess from "../../Modals/ModalDelete/ModalDeleteMess";

const LigneMess = (props) => {
  const [modalAnswerShow, setModalAnswerShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  return (
    <>
      <tr>
        <td>{item.author}</td>
        <td>{item.email}</td>
        <td>{item.content}</td>
        <td>{item.datemess}</td>
        <td>
          <a onClick={() => setModalAnswerShow(true)}>
            <QuestionAnswerIcon />
          </a>{" "}
          <a onClick={() => setModalDelShow(true)}>
            <DeleteForeverIcon color="disabled" />
          </a>
        </td>
      </tr>
      <ModalAnswer
        show={modalAnswerShow}
        onHide={() => setModalAnswerShow(false)}
      />
      <ModalDeleteMess
        show={modalDelShow}
        onHide={() => setModalDelShow(false)}
        item={item}
      />
    </>
  );
};

export default LigneMess;
