import React from "react";
import { NavLink } from "react-router-dom";

import closeIcon from "../../assets/images/close.svg";

import "./navbar.scss";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <aside className={` ${sidebar ? "open" : ""}`}>
      {/* CLose Icon */}

      <img
        src={closeIcon}
        alt="close"
        className="close"
        onClick={() => setSidebar(!sidebar)}
      />
      {/* Nav Lists */}
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            onClick={() => setSidebar()}
            className="nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            onClick={() => setSidebar()}
            className="nav-link"
            activeClassName="active"
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services"
            activeClassName="active"
            onClick={() => setSidebar()}
            className="nav-link"
          >
            Our Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/policy"
            activeClassName="active"
            onClick={() => setSidebar()}
            className="nav-link"
          >
            Our Policy
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/disclaimer"
            activeClassName="active"
            onClick={() => setSidebar()}
            className="nav-link"
          >
            Disclaimer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/career"
            activeClassName="active"
            onClick={() => setSidebar()}
            className="nav-link"
          >
            Career
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={() => setSidebar()}
            className="nav-link"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
