import React from "react";
import { Bell, Menu } from "lucide-react";
import logo from "../public/logo.png"
import defaultProfile from"../public/profile-logo-default.png";
import { Link } from "react-router-dom";
const Header = ({ onMobileMenuClick, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="w-full bg-white shadow-md box-shadow-1 px-4 py-3 mb-5 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded"
          onClick={onMobileMenuClick}
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className=" h-10"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-medium hidden sm:block">User Name</p>
       <div className="w-10 h-10 rounded-full overflow-hidden border border-black p-0 m-0">
  <img
    src={defaultProfile}
    alt="Profile"
    className="w-full h-full object-cover block p-0 m-0"
  />
</div>

        <Bell size={22} className="text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
