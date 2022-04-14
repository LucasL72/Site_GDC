import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCom } from "../../../store/actions/ComsActions";
import ListComs from "../../../components/Id.js/ListComs";
const EditComs = () => {
  const listComs = useSelector((state) => state.coms.listComs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCom());
  }, []);
  return (
    <div>
      <h2 className="text-center ssligne">Gestion des commentaires</h2>
      <ListComs list={listComs} />
    </div>
  );
};

export default EditComs;
