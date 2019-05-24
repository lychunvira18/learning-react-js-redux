import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //   setTimeout(() => {
  //     props.history.push("/about");
  //   }, 5000);
  return (
    <div>
      <nav className="nav-wrapper blue lighten-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Router
          </Link>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
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

export default withRouter(Navbar);
