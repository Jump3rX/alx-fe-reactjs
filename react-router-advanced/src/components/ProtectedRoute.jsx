import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const useAuth = {
  isAuthenticated: false,
  login: () => (useAuth.isAuthenticated = true),
  logout: () => (useAuth.isAuthenticated = false),
};
function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    useAuth.isAuthenticated
  );
  useEffect(() => {
    setIsAuthenticated(useAuth.isAuthenticated);
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
