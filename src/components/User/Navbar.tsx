import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { BiCart, BiUser } from "react-icons/bi";
import { CgUser } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const token = localStorage.getItem("token");

  const navLinks = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "PRODUCTS", href: "product" },
    { id: 3, name: "COLORS", href: "color" },
    { id: 4, name: "PAINTERS", href: "painter" },
    { id: 5, name: "ABOUT", href: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="shadow-sm bg-zinc-950 text-zinc-50">
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between ">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-2xl font-bold">
            <span className="text-primary">MN</span> HARDWARES
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden font-semibold gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className="hover:text-primary transition-all"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {token ? (
          <div className="hidden md:flex gap-4 items-center justify-center">
            <button onClick={() => navigate("/profile/detail")}>
              <BiCart size={26} />
            </button>
            <button onClick={() => navigate("/profile/detail")}>
              <CgUser size={28} />
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="border px-4 py-2">
            LOGIN
          </button>
        )}

        {/* Auth */}

        {/* Mobile Button */}
        <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MdOutlineMenu size={32} className="hover:text-primary" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className="hover:text-primary font-semibold"
            >
              {link.name}
            </NavLink>
          ))}
          {token ? (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate("/profile/detail")}
                className="border px-4 py-2"
              >
                Cart
              </button>
              <button
                onClick={() => navigate("/profile/detail")}
                className="border px-4 py-2"
              >
                Profile
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="border px-4 py-2">
              LOGIN
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
