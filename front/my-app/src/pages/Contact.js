import React from "react";
import ListEvents from "../components/Admin/ListEvents";
import ContForm from "../components/Contact/ContForm";
import Nous from "../components/Contact/Nous";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";

const Contact = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);

  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <div>
      <MainLayout>
        <Nous />
        <ListEvents list={listEvents} />
        <ContForm />
      </MainLayout>
    </div>
  );
};

export default Contact;
