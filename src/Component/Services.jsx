import React from "react";
import service1Image from "../assets/dotnet.png"; // Path to your service 1 image
import service2Image from "../assets/webdesign.png"; // Path to your service 2 image
import service3Image from "../assets/appdev.png"; // Path to your service 3 image

const Services = () => {
  return (
    <div className="container text-center bg-light py-5">
      <h2 className="mt-4">Services Provided By Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <hr
            className="mb-4"
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#007bff",
              border: "none",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="service">
            <img
              src={service1Image}
              alt="Service 1"
              className="img-fluid rounded-circle mb-3"
            />
            <h4 className="service-title">Dot Net Core</h4>
            <p className="service-description">
              {/* Comment: Description of Service 1 */}
              Unlock the Power of Dot Net Core with us. We specialize in delivering high-performance, scalable, and secure Dot Net Core solutions tailored to your business needs. From custom application development to migration and modernization, our expert team is here to empower your business with the latest advancements in Dot Net Core technology.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <img
              src={service2Image}
              alt="Service 2"
              className="img-fluid rounded-circle mb-3"
            />
            <h4 className="service-title">Web Solutions</h4>
            <p className="service-description">
              {/* Comment: Description of Service 2 */}
              Experience the Future of Web Solutions with RoutTech Solutions. We are a leading provider of innovative web solutions that empower businesses to thrive in the digital world. Our expert team specializes in delivering cutting-edge web development services tailored to your unique needs.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <img
              src={service3Image}
              alt="Service 3"
              className="img-fluid rounded-circle mb-3"
            />
            <h4 className="service-title">App/Windows Development</h4>
            <p className="service-description">
              {/* Comment: Description of Service 3 */}
              Unleash the Potential of App and Windows Development with us. We specialize in creating innovative, high-performance applications for various platforms. From custom app development to Windows software solutions, our expert team delivers cutting-edge solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
