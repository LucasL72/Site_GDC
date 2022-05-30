import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { BanUser } from "../../store/actions/UsersActions";

const ModalBan = (props) => {
  const { item } = props;
  const [isBan] = useState(item.isBan);
  const dispatch = useDispatch();
  const handleStatut = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      isBan: isBan,
      id: item.id,
    };
    dispatch(BanUser(editData));
    window.location.reload();
  };
  return (
    <div>
      <div>
        <Modal {...props} size="lg" aria-labelledby="ModalDel" centered>
          <Modal.Header closeButton>
            <Modal.Title id="ModalDel">
              Gestion Statut {""}
              <img
                alt="Logo association"
                src="../logoGDC.png"
                width="50"
                height="50"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Voulez-vous vraiment effectuer cette action ? </h4>
          </Modal.Body>
          <Modal.Footer>
            <Form onSubmit={(e) => handleStatut(e)}>
              <Button
                cla
                variant="outline-danger"
                type="submit"
                onClick={props.onHide}
              >
                Confirmer
              </Button>{" "}
            </Form>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalBan;
