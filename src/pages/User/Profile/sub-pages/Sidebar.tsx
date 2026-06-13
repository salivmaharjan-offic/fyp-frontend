import { BiExit, BiLockAlt } from "react-icons/bi";
import { PiPencil } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userDTO } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="flex-1/4 flex flex-col gap-6 py-8">
      {/* Image */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src="/pic.webp" alt="" className="w-40 rounded-full" />
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xl text-zinc-400 font-semibold">
            {userDTO?.username}
          </span>
          <span className="text-sm text-zinc-600">{userDTO?.email}</span>
        </div>
      </div>

      {/* NavLinks */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <NavLink
          to="/profile/detail"
          className="flex justify-center items-center text-left gap-4 bg-primary hover:bg-primary/90 transition-all text-zinc-950 w-60 h-12 rounded-md"
        >
          <PiPencil size={24} className="flex-1/4" />
          <span className="flex-3/4 font-semibold">Account Information</span>
        </NavLink>
        <NavLink
          to="/profile"
          className="flex justify-center items-center text-left gap-4 bg-primary hover:bg-primary/90 transition-all text-zinc-950 w-60 h-12 rounded-md"
        >
          <BiLockAlt size={24} className="flex-1/4" />
          <span className="flex-3/4 font-semibold">Password Manager</span>
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex justify-center text-left items-center gap-4 bg-primary hover:bg-primary/90 transition-all text-zinc-950 w-60 h-12 rounded-md"
        >
          <BiExit size={24} className="flex-1/4" />
          <span className="flex-3/4 font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
