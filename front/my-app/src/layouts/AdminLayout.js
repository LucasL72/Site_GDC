import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navigbar from "../components/core/Navigbar";
import TabAdmin from "../components/core/TabAdmin";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navigbar />
      <Header />
      <TabAdmin />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
