import React from "react";
import sectionimage from "../assets/section_1.jpg"; // Path to your section image

const Section1 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mt-4 mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
            Professional IT Solutions Services for Your Needs
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            Welcome to RoutTech Solutions, where technology meets innovation! We are a leading IT solutions company
            dedicated to helping businesses harness the power of technology to drive growth and achieve success in the
            digital era.
          </p>
          <button className="btn btn-primary btn-sm mt-3 px-4">Learn More</button>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="image-container">
            <img src={sectionimage} alt="Section" className="img-fluid" style={{ borderRadius: "0" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
