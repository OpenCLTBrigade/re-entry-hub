import React from "react";
import { Link } from "react-router-dom";
// import "./NavTabs.scss"

const NavTabs = () => (
  <nav className="navbar navbar-light bg-light navbar-expand-md">
    <Link
    //Navbar Title
      to="/"
      className={
        window.location.pathname === "/"
          ? "nav-link active navbar-brand pl-0"
          : "nav-link navbar-brand pl-0"
      }
    >
      Re-entry Roadmap
    </Link>
    {/* Ternary turns off menu links on home page */}
    {  window.location.pathname !== "/" ? (
      <div className="ml-auto">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggle"
      aria-controls="navbarToggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
 
    <div className="collapse navbar-collapse" id="navbarToggle">
     
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={
              
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/roadmap"
            className={
              window.location.pathname === "/roadmap"
                ? "nav-link active"
                : "nav-link"
            }
          >
            RoadMap
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/about"
            className={
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/logon"
            className={
              window.location.pathname === "/logon"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Logon
          </Link>
        </li>
        

        <li className="nav-item">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>

    </div>
    </div>
    ): "" } 
  </nav>
);

export default NavTabs;
