import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const fakeAuth = {
  isAuthenticated: false,
  login: () => (fakeAuth.isAuthenticated = true),
  logout: () => (fakeAuth.isAuthenticated = false),
};
function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    fakeAuth.isAuthenticated
  );
  useEffect(() => {
    setIsAuthenticated(fakeAuth.isAuthenticated);
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
