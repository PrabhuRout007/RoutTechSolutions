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
          We offer comprehensive IT solutions, specializing in copy and 
          content writing. Additionally, we provide skilled employees to companies, 
          ensuring a professional and efficient workforce. Our services encompass a 
          wide range of IT needs, while our expertise in copy and content writing ensures 
          impactful and persuasive communication. Trust us to deliver exceptional 
          IT solutions and provide proficient employees that meet your company's requirements
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
