import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

function AppRoutes() {
  const { currentUser } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage or auth context for user persistence
    const storedUser = localStorage.getItem("user");
    if (currentUser || storedUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [currentUser]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", "true"); // Simple persistence flag for demo, real validation in context
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <LandingPage onLogin={handleLoginSuccess} />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
