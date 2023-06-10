import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png"; // Path to your logo image

let NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
      <Link to="/" className="navbar-brand">
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "50px", width: "auto" }} // Adjust the dimensions as per your requirements
          />
        </Link>
        <Link to="/" className="navbar-brand">
          PrabhuTechSolutions
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#Bar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="Bar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item px-2 active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item px-2 active">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item px-2 active">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item px-2">
              <button className="btn btn-primary">Hire Us</button>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
