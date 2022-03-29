import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Photos from "./pages/Photos";
import BlogID from "./pages/BlogID";
import Profil from "./pages/Profil"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin";
import Register from "./pages/Register"
import Cgu from "./pages/Cgu";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Blog" exact element={<Blog />} />
        <Route path="/Blog/:id" exact element={<BlogID />} />
        <Route path="/Profil" exact element={<Profil />} />
        <Route path="/Photos" exact element={<Photos />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/Register" exact element={<Register />} />      
        <Route path="/Admin" exact element={<Admin />} />
        <Route path="/Cgu" exact element={<Cgu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
