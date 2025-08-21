import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, X } from "lucide-react";
import logo from "../public/logo.png";
import defaultProfile from "../public/profile-logo-default.png";
import { motion, AnimatePresence } from "framer-motion";
import UserProfileCard from "../popups/UserProfileCard";
import BranchSelector from "../utils/BranchSelectore";
const Header = ({ sidebarOpen, setSidebarOpen, mobileSidebar, setMobileSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample user data (you can fetch this dynamically)
  const user = {
    name: "Rajesh Kumar",
    mobile: "9876543210",
    role: "Admin",
    store: "Ahmedabad",
    storeCount: 5,
    stores:["jodhpur","vejlpur"],
    img:{defaultProfile},
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Example notifications (replace later with real data)
  const notifications = [
    { id: 1, project: "Project A", message: "10 stock items issued", time: "2h ago" },
    { id: 2, project: "Project B", message: "5 items returned", time: "4h ago" },
    { id: 3, project: "Project C", message: "Low stock alert: Cables", time: "1d ago" },
  ];

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 mb-5 flex items-center justify-between relative">
      {/* Left side - Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-11 xl:h-12" />
      </div>

 {/* Right side */}
<div className="flex items-center gap-4">
      {/* Branch Selector */}
     <div className=" hidden md:flex"> <BranchSelector stores={user.stores} defaultStore="gota" /></div> 
  {/* Profile Menu Wrapper */}
  <div className="relative" ref={popupRef}>
  {/* Profile Image Trigger */}
  <div
    className=" w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-black cursor-pointer"
    onClick={() => setOpen((prev) => !prev)}
  >
    <img
      src={defaultProfile}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

<div className="relative">
  {/* Popup */}
  {open && (
    <div className="absolute top-2 right-0 sm:right-0 w-64 max-w-[90vw] z-50">
      <UserProfileCard user={user} />
    </div>
  )}
</div>


</div>

  {/* Bell Icon */}
  <div
    onClick={() => setShowNotifications(!showNotifications)}
    className="relative cursor-pointer"
  >
    <Bell size={22} className="text-gray-700 cursor-pointer" />
    {notifications.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        {notifications.length}
      </span>
    )}
  </div>

  {/* Notification Dropdown */}
  <AnimatePresence>
    {showNotifications && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -10, x: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -10, x: 20 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute right-14 top-14 w-80 bg-white shadow-xl rounded-lg border border-gray-200 z-50 origin-top-right"
      >
        <div className="p-3 border-b font-semibold text-gray-800">
          Notifications
        </div>
        <ul className="max-h-60 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <li
                key={n.id}
                className="px-4 py-3 hover:bg-gray-50 border-b last:border-none"
              >
                <p className="text-sm font-medium text-gray-800">{n.project}</p>
                <p className="text-xs text-gray-600">{n.message}</p>
                <p className="text-xs text-gray-400">{n.time}</p>
              </li>
            ))
          ) : (
            <li className="p-4 text-sm text-gray-500 text-center">
              No new notifications
            </li>
          )}
        </ul>
        <div className="p-2 text-center">
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Toggle Menu (Large Devices) */}
  <button
    className="hidden md:block p-2 hover:bg-gray-100 rounded transition-colors duration-200"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
  </button>

  {/* Toggle Menu (Small Devices) */}
  <button
    className="block md:hidden p-2 hover:bg-gray-100 rounded transition-colors duration-200"
    onClick={() => setMobileSidebar(true)}
  >
    <Menu size={22} className="text-gray-700" />
  </button>
</div>

    </header>
  );
};

export default Header;
