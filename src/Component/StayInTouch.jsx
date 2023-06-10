import React from "react";

const StayInTouch = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="mt-4">Stay In Touch</h2>
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
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Enter your email address to subscribe to our newsletter!
          </p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Email Address"
              aria-describedby="subscribe-btn"
              style={{ borderRadius: "0", height: "3rem" }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="subscribe-btn"
                style={{ borderRadius: "0", height: "3rem" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayInTouch;
