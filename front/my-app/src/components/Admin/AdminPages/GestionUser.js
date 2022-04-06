import React from "react";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../store/actions/UsersActions";
import TablUsers from "../User/TablUsers";


const GestionUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.users.listUsers);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">Gestion des Utilisateurs</h1>
        <TablUsers list={listUsers} />
        
      </Container>
    </div>
  );
};

export default GestionUser;
