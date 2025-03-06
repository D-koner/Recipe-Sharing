import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import backgroundImage from "../assets/navbar_bg.jpg";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        padding: "1rem",
        borderBottom: "3px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <Link className="navbar-brand text-light" to="/">
            🍽️ LUNNER
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div>
            <Link className="btn btn-custom btn-login mx-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-custom btn-register" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
