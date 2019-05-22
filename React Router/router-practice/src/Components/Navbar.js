import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper blue lighten-3">
        <div className="container">
          <a href="/" className="brand-logo">
            Router
          </a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
