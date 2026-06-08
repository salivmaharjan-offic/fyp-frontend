import { Outlet } from "react-router";
import Footer from "../components/User/Footer";
import Navbar from "../components/User/Navbar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
