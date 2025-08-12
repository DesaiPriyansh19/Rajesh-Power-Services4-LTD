import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header on top, full width */}
      <Header
        onMobileMenuClick={() => setMobileSidebar(true)}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for desktop */}
        <div className="hidden md:block">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        </div>

        {/* Sidebar for mobile */}
        {mobileSidebar && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setMobileSidebar(false)}
            ></div>

            {/* Sidebar Drawer */}
            <div className="relative z-50 w-64 bg-white shadow-lg">
              <Sidebar isOpen={true} setIsOpen={() => {}} />
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="flex-1 pl-4 pt-4 pb-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
