import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Layout from "./pages//Layout";
import Dashboard from "./pages/Dashboard";
import POPage from "./pages/POPage";
import DispatchPage from "./pages/DispatchPage";
import StorePage from "./pages/StorePage";
import GoodsIssueUpdates from "./pages/GoodsIssueUpdates";
import ProjectsPage from "./pages/ProjectsPage";
import Reports from "./pages/Reports";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <div className="bg-gray-100">
    <Router>
      <Routes>
        {/* Login page (no layout) */}
        <Route path="/" element={<Login />} />

        {/* Protected pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Dashboard/>} />
          <Route path="/po1" element={<POPage/>} />
          <Route path="/po2" element={<POPage/>} />
          <Route path="/clearance1" element={<DispatchPage/>} />
          <Route path="/clearance2" element={<DispatchPage/>} />
                 <Route path="/store" element={<StorePage/>} />
                     <Route path="/goods-issue-updates" element={<GoodsIssueUpdates/>} />
                       <Route path="/projects" element={<ProjectsPage/>} />
                        <Route path="/reports" element={<Reports/>} />
                          <Route path="/users" element={<UsersPage/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
