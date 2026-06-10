import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const token = localStorage.getItem("token");

  const navLinks = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "PRODUCTS", href: "product" },
    { id: 3, name: "COLORS", href: "color" },
    { id: 5, name: "ABOUT", href: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-primary">MN</span> HARDWARES
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-semibold gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className="hover:text-primary"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {token ? (
          <button
            onClick={handleLogout}
            className="hidden md:flex border px-4 py-2"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="hidden md:flex border px-4 py-2"
          >
            LOGIN
          </button>
        )}

        {/* Auth */}

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
            <button onClick={handleLogout} className="border px-4 py-2">
              LOGOUT
            </button>
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
