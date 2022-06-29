import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navbar from "../components/core/Navigbar";
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { check } from '../store/actions/UsersActions'
const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('user_token')) localStorage.setItem('user_token', 'visitor')
    dispatch(check());
  }, []);
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
