import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-recipe">Add Recipe</NavLink>
    </nav>
  );
}

export default NavBar;
