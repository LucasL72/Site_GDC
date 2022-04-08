import React from "react";
import Container from "react-bootstrap/Container";
import TablMess from "../Mess/TablMess";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../../../store/actions/MessagesActions";


const GestionMess = () => {
  const dispatch = useDispatch();
  const listMessages = useSelector((state) => state.messages.listMessages);

  useEffect(() => {
    dispatch(getMessage());
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">Gestion des Messages</h1>
        <TablMess list={listMessages} />
      </Container>
    </div>
  );
};

export default GestionMess;
