import React, { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  FileText,
  Truck,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import logo from "../public/logo.png";
import { Link } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, type: "link", path: "/home" },
  {
    name: "PO Updated",
    icon: <FileText size={20} />,
    type: "dropdown",
    children: [
      { name: "POPriyansh 1", path: "/po1" },
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
];

  return (
    <div
      className={`bg-white border-r  h-full border-gray-200 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
   

      {/* Menu List */}
    <ul className="mt-0 pt-8 box-shadow-1 space-y-2 relative flex-1">
  {menuItems.map((item, index) => (
    <li key={index} className="relative group">
      {/* Main Item */}
      <div
        onClick={() =>
          item.type === "dropdown" && isOpen
            ? toggleDropdown(item.name)
            : null
        }
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 relative"
      >
        <div className="flex items-center gap-3">
          {item.icon}
          {isOpen && item.type === "link" && (
            <Link to={item.path}>{item.name}</Link>
          )}
          {isOpen && item.type === "dropdown" && <span>{item.name}</span>}

          {!isOpen && (
            <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
              {item.name}
            </span>
          )}
        </div>

        {item.type === "dropdown" && isOpen && (
          openDropdown === item.name ? (
            <ChevronDown size={16} className="text-gray-600" />
          ) : (
            <ChevronRight size={16} className="text-gray-600" />
          )
        )}
      </div>

      {/* Dropdown children */}
      {item.type === "dropdown" &&
        openDropdown === item.name &&
        isOpen && (
          <ul className="ml-10 space-y-1">
            {item.children.map((child, i) => (
              <li key={i} className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
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
