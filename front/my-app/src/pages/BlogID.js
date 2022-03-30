import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DetailBlog from "../components/Id.js/DetailBlog";
import AddComs from "../components/Id.js/AddComs";
import Coms from "../components/Id.js/Coms";

const BlogID = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/Blog");
  }, [navigate, state]);

  return (
    <div>
      <MainLayout>
          <DetailBlog />
          <Coms />
          <AddComs />
      </MainLayout>
    </div>
  );
};

export default BlogID;
