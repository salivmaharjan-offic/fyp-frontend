import { BiBox, BiLogOut, BiUser } from "react-icons/bi";
import { BsCash } from "react-icons/bs";
import { CgColorBucket } from "react-icons/cg";
import { FaPaintBrush } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
  const sideLinks = [
    {
      id: 1,
      link: "/admin",
      icon: <MdDashboard size={28} />,
      name: "Dashboard",
    },
    { id: 2, link: "/admin/users", icon: <BiUser size={28} />, name: "Users" },
    {
      id: 3,
      link: "/admin/products",
      icon: <BiBox size={28} />,
      name: "Products",
    },
    {
      id: 4,
      link: "/admin/colors",
      icon: <CgColorBucket size={28} />,
      name: "Colors",
    },
    {
      id: 5,
      link: "/admin/painters",
      icon: <FaPaintBrush size={28} />,
      name: "Painters",
    },
    {
      id: 6,
      link: "/admin/history",
      icon: <BsCash size={28} />,
      name: "Transaction History",
    },
    {
      id: 7,
      link: "/admin/logout",
      icon: <BiLogOut size={28} />,
      name: "Logout",
    },
  ];
  return (
    <div className=" bg-zinc-950 text-zinc-50 flex flex-col items-center gap-8 py-8">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">MN</span> HARDWARES
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {sideLinks.map((item) => (
          <NavLink to={item.link} key={item.id}>
            <div className="flex gap-4 items-center justify-center bg-zinc-800 px-12 py-4 rounded">
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
