import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ handleLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyle = (path) =>
    currentPath === path ? "text-[#FF4D00]" : "text-[#FFFFFF]";

  return (
    <div className='bg-[#191919] flex justify-between items-center container mx-auto py-2 px-40'>
      <Link to={"/"}><img src="/sketchcafe.png" alt="" /></Link>
      <div className='flex items-center gap-8 font-bold'>
        <Link to={"/"} className={linkStyle("/")}>Dashboard</Link>
        <Link to={"/history"} className={linkStyle("/history")}>Əməliyyatlar</Link>
        <Link to={"/clients"} className={linkStyle("/clients")}>Müştərilər</Link>
        <Link to={"/create-customer"} className={linkStyle("/create-customer")}>Yeni Müştəri</Link>

       
      </div>
      <button onClick={handleLogout} className='bg-[#FF4D00] flex items-center gap-2 px-4 py-2 rounded-md'>
        <FaUserAlt className='text-white' />
      </button>
    </div>
  );
};

export default Navbar;
