import React from "react";
import Modal from "react-bootstrap/Modal";
import { deleteMessage } from "../../../store/actions/MessagesActions";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const ModalDeleteMess = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    dispatch(deleteMessage(id));
  };
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="ModalDel" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalDel">
            Supprimer le message ? {""}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Voulez-vous vraiment supprimer ce contenu ? </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            
            variant="outline-danger"
            type="submit"
            onClick={() => handleDelete(item.id)}
          >
            Supprimer
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDeleteMess;
