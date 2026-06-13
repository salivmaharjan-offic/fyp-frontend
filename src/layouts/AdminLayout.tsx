import { Outlet } from "react-router";
import Sidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1/4">
          <Sidebar />
        </div>
        <div className="flex-3/4 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
