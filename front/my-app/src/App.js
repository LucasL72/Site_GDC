import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Photos from "./pages/Photos";
import BlogID from "./pages/BlogID";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Blog" exact element={<Blog />} />
        <Route path="/BlogID" exact element={<BlogID />} />
        <Route path="/Photos" exact element={<Photos />} />
        <Route path="/Admin" exact element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;