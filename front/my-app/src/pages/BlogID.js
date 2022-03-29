import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DetailBlog from "../components/Id.js/DetailBlog";

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
      </MainLayout>
    </div>
  );
};

export default BlogID;
