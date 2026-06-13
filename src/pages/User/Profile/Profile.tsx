import { Outlet } from "react-router";
import Sidebar from "./sub-pages/Sidebar";

const Profile = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <div className="flex-3/4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
