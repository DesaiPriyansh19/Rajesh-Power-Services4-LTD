import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import react from "react";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import POPage from "./pages/POPage";
import DispatchPage from "./pages/DispatchPage";
import StorePage from "./pages/StorePage";
import GoodsIssueUpdates from "./pages/GoodsIssueUpdates";
import ProjectsPage from "./pages/ProjectsPage";
import Reports from "./pages/Reports";
import UsersPage from "./pages/UsersPage";
import AnimatedPage from "./pages/AnimatedPage";

// Create a wrapper component that uses location to support AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {/* Login page (no layout) */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Login />
            </AnimatedPage>
          }
        />

        {/* Protected pages with Layout */}
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <AnimatedPage>
                <Dashboard />
              </AnimatedPage>
            }
          />
          <Route
            path="/po1"
            element={
              <AnimatedPage>
                <POPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/po2"
            element={
              <AnimatedPage>
                <POPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/clearance1"
            element={
              <AnimatedPage>
                <DispatchPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/clearance2"
            element={
              <AnimatedPage>
                <DispatchPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/store"
            element={
              <AnimatedPage>
                <StorePage />
              </AnimatedPage>
            }
          />
          <Route
            path="/goods-issue-updates"
            element={
              <AnimatedPage>
                <GoodsIssueUpdates />
              </AnimatedPage>
            }
          />
          <Route
            path="/projects"
            element={
              <AnimatedPage>
                <ProjectsPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/reports"
            element={
              <AnimatedPage>
                <Reports />
              </AnimatedPage>
            }
          />
          <Route
            path="/users"
            element={
              <AnimatedPage>
                <UsersPage /> 
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
