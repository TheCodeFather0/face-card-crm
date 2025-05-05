import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = ({ handleLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    currentPath === path
      ? "text-[#FF4D00] font-semibold"
      : "text-white hover:text-[#FF4D00] transition";

  return (
    <div className="bg-[#191919] w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4 py-4 px-4 sm:px-6 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <img src="/sketchcafe.png" className="h-[30px]" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-bold">
            <Link to="/" className={linkStyle("/")}>
              Dashboard
            </Link>
            <Link to="/history" className={linkStyle("/history")}>
              Əməliyyatlar
            </Link>
            <Link to="/clients" className={linkStyle("/clients")}>
              Müştərilər
            </Link>
          </div>

          {/* Right-side buttons: Logout and Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-white hover:text-[#FF4D00] transition"
            >
              <FaUserAlt />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu items */}
        {menuOpen && (
          <div className="flex flex-col gap-4 font-bold md:hidden">
            <Link
              to="/"
              className={linkStyle("/")}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/history"
              className={linkStyle("/history")}
              onClick={() => setMenuOpen(false)}
            >
              Əməliyyatlar
            </Link>
            <Link
              to="/clients"
              className={linkStyle("/clients")}
              onClick={() => setMenuOpen(false)}
            >
              Müştərilər
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
