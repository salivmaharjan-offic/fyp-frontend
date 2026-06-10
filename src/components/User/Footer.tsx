import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "Colors", path: "/colors" },
    { name: "Painter", path: "/painters" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-primary">MN</span> HARDWARES
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Your trusted destination for premium paints, hardware supplies,
              and professional painting services.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="hover:text-primary transition"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-primary" />
                <span>+977 9866445340</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>Kirtipur-8, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} MN Hardwares. All rights reserved.</p>

          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-primary">
              Privacy Policy
            </NavLink>

            <NavLink to="/terms" className="hover:text-primary">
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
