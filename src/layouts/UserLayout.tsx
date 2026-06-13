import { Outlet } from "react-router";
import Footer from "../components/User/Footer";
import Navbar from "../components/User/Navbar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
