import React from "react";
import logoImage from "../assets/Logo.png"; // Path to your logo image

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img src={logoImage} alt="Logo" className="img-fluid logo" />
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              Empowering businesses with innovative technology solutions to thrive in the digital age.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              Email: info@prabhutechsolution.com
              <br />
              Mobile: 8926356522
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
