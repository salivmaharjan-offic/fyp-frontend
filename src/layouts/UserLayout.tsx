import { Outlet } from "react-router";
import Footer from "../components/User/Footer";
import Navbar from "../components/User/Navbar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
