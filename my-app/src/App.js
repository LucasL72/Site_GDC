//APP
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Photos from "./pages/Photos";
import BlogID from "./pages/BlogID";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Cgu from "./pages/Cgu";
import NotFound from "./pages/NotFound";
import Lostpass from "./pages/Lostpass";
import VerifAuth from "./pages/VerifAuth";
import { HashRouter, Routes, Route } from "react-router-dom";
//Admin
import Admin from "./pages/admin/Admin";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminPics from "./pages/admin/AdminPics";
import AdminEven from "./pages/admin/AdminEven";
import AdminMess from "./pages/admin/AdminMess";
import AdminUser from "./pages/admin/AdminUser";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Admin />} />
      <Route path="Blog" exact element={<AdminBlog />} />
      <Route path="Photos" exact element={<AdminPics />} />
      <Route path="Events" exact element={<AdminEven />} />
      <Route path="Messages" exact element={<AdminMess />} />
      <Route path="User" exact element={<AdminUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="Blog" exact element={<Blog />} />
        <Route path="Blog/:id" exact element={<BlogID />} />
        <Route path="Profil" exact element={<Profil />} />
        <Route path="Photos" exact element={<Photos />} />
        <Route path="Contact" exact element={<Contact />} />
        <Route path="Register" exact element={<Register />} />
        <Route path="Lostpassword/" exact element={<Lostpass />} />
        <Route path="verif/:rand" element={<VerifAuth />} />
        <Route path="Cgu" exact element={<Cgu />} />
        <Route path="/admin/*" exact element={<AdminRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
