import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navigbar from "../components/core/Navigbar";
import TabAdmin from "../components/core/TabAdmin";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AdminLayout = ({ children }) => {
  if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
  else {
    const token = jwt_decode(localStorage.getItem("user_token"));
    if (token.isVerified === 1 && token.isBan === 0 && token.isAdmin === 1)
      return (
        <div>
          <Navigbar />
          <Header />
          <TabAdmin />
          <main>{children}</main>
          <Footer />
        </div>
      );
    else return <Navigate to="/" />;
  }
};

export default AdminLayout;
