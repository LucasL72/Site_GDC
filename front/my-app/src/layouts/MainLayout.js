import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navbar from "../components/core/Navigbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
