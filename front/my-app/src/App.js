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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
//Admin
import Admin from "./pages/admin/Admin";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminPics from "./pages/admin/AdminPics";
import AdminEven from "./pages/admin/AdminEven";
import AdminMess from "./pages/admin/AdminMess";
import AdminUser from "./pages/admin/AdminUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="Blog" exact element={<Blog />} />
      <Route path="Blog/:id" exact element={<BlogID />} />
      <Route path="Profil" exact element={<Profil />} />
      <Route path="Photos" exact element={<Photos />} />
      <Route path="Contact" exact element={<Contact />} />
      <Route path="Register" exact element={<Register />} />
      <Route path="Cgu" exact element={<Cgu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" exact element={<Admin />} />
      <Route path="Blog" exact element={<AdminBlog />} />
      <Route path="Photos" exact element={<AdminPics />} />
      <Route path="Events" exact element={<AdminEven />} />
      <Route path="Messages" exact element={<AdminMess />} />
      <Route path="User" exact element={<AdminUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" exact element={<AppRoutes />} />
        <Route path="/Admin/*" exact element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
