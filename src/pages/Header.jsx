import React from "react";
import { Bell, Menu, X  } from "lucide-react";
import logo from "../public/logo.png";
import defaultProfile from "../public/profile-logo-default.png";

const Header = ({ sidebarOpen, setSidebarOpen, mobileSidebar, setMobileSidebar }) => {
  return (
    <header className="w-full bg-white shadow-md px-4 py-3 mb-5 flex items-center justify-between">
      {/* Left side - Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-11 xl:h-12" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-medium hidden sm:block">User Name</p>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-black">
          <img
            src={defaultProfile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bell Icon */}
        <Bell size={22} className="text-gray-700 cursor-pointer" />

        {/* Toggle Menu (Mobile only) */}
      {/* Toggle Menu for Large Devices */}
        <button
          className="hidden lg:block p-2 hover:bg-gray-100 rounded transition-colors duration-200"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X size={22} className="" />
          ) : (
            <Menu size={22} className="" />
          )}
        </button>

        {/* Toggle Menu for Small Devices */}
        <button
          className="block lg:hidden p-2 hover:bg-gray-100 rounded transition-colors duration-200"
          onClick={() => setMobileSidebar(true)}
        >
          <Menu size={22} className="text-gray-700" />
        </button>
        
      </div>
    </header>
  );
};

export default Header;
