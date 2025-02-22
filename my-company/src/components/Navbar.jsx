import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#2c3e50",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",

    width: "100%",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    transition: "color 0.3s",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
