import React, { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  FileText,
  Truck,
  ChevronRight,
  ChevronDown,
  Package,
  ClipboardList,
  Folder,
  BarChart,User
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../public/logo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

const menuItems = [ 
  { 
    name: "Dashboard", 
    icon: <LayoutDashboard size={20} />, 
    type: "link", 
    path: "/home" 
  },
  {
    name: "PO Updated",
    icon: <FileText size={20} />,
    type: "dropdown",
    children: [
      { name: "PO 1", path: "/po1" },
      { name: "PO 2", path: "/po2" },
    ],
  },
  {
    name: "Dispatch Clearance",
    icon: <Truck size={20} />,
    type: "dropdown",
    children: [
      { name: "Clearance 1", path: "/clearance1" },
      { name: "Clearance 2", path: "/clearance2" },
    ],
  },
  {
    name: "STORES",
    icon: <Package size={20} />,
    type: "link",
    path: "/store",
  },
  {
    name: "GOODS ISSUE UPDATES",
    icon: <ClipboardList size={20} />,
    type: "link",
    path: "/goods-issue-updates",
  },
  {
    name: "Project",
    icon: <Folder size={20} />,
    type: "link",
    path: "/projects",
  },
  {
    name: "Reports",
    icon: <BarChart size={20} />,
    type: "link",
    path: "/reports",
  },
  {
    name: "Users",
    icon: <User size={20} />,
    type: "link",
    path: "/users",
  },
];


  return (
    <div
      className={`bg-white border-r border-gray-200  box-shadow-1 pb-10
        transition-[width] duration-500 ease-in-out 
        overflow-y-auto h-full flex flex-col 
        ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Menu List */}
      <ul className="mt-0 pt-8 space-y-2 relative flex-1">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            {/* Main Item */}
          <Link to={item.path}>
           <div
              onClick={() =>
                item.type === "dropdown" && isOpen
                  ? toggleDropdown(item.name)
                  : null
              }
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {/* Animated text */}
                <span
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.type === "link" ? (
                    <Link to={item.path}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </span>

                {/* Tooltip for collapsed view */}
                {!isOpen && (
                  <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
                    {item.name}
                  </span>
                )}
              </div>

              {/* Chevron animation */}
              {item.type === "dropdown" && isOpen && (
                <span
                  className={`transform transition-transform duration-300 ${
                    openDropdown === item.name ? "rotate-90" : ""
                  }`}
                >
                  {openDropdown === item.name ? (
                    <ChevronDown size={16} className="text-gray-600" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-600" />
                  )}
                </span>
              )}
            </div></Link> 

            {/* Dropdown children with fade+slide animation */}
            {item.type === "dropdown" && (
              <ul
                className={`ml-10 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === item.name && isOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.children.map((child, i) => (
                  <li
                    key={i}
                    className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link to={child.path}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
