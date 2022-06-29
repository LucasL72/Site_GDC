import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCom} from "../store/actions/ComsActions";
import { useLocation, useNavigate } from "react-router-dom";
import DetailBlog from "../components/Id.js/DetailBlog";
import MainLayout from "../layouts/MainLayout";

const BlogID = () => {
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
      </MainLayout>
    </div>
  );
};

export default BlogID;
