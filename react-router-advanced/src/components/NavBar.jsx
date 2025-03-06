import { NavLink } from "react-router-dom";
import { fakeAuth } from "./ProtectedRoute";
import { useState, useEffect } from "react";
function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    fakeAuth.isAuthenticated
  );
  useEffect(() => {
    setIsAuthenticated(fakeAuth.isAuthenticated);
  }, []);

  const handleLogout = () => {
    fakeAuth.logout();
    setIsAuthenticated(false);
  };
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile/*">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/blog/123">Sample Blog</NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
