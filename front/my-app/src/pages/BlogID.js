import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCom} from "../store/actions/ComsActions";
import { useLocation, useNavigate } from "react-router-dom";
import DetailBlog from "../components/Id.js/DetailBlog";
import AddComs from "../components/Id.js/AddComs";
import MainLayout from "../layouts/MainLayout";
import ListComs from "../components/Id.js/ListComs";

const BlogID = () => {
  const listComs = useSelector((state) => state.coms.listComs);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/Blog");
  }, [navigate, state]);

  useEffect(() => {
    dispatch(getCom());
  }, []);
  return (
    <div>
      <MainLayout>
        <DetailBlog />
        <ListComs list={listComs} />
        <AddComs />
      </MainLayout>
    </div>
  );
};

export default BlogID;
