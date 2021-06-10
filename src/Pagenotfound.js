import React from "react";
import { Link } from "react-router-dom";

const Pagenotfount = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container notfound">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">
            <h1 style={{ color: "#E8195B" }}>Oops!</h1>

            <h3 style={{ color: "white" }}> 404 Page Not Found</h3>
            <p style={{ color: "white" }}>
              {" "}
              The page your looking for might heve been removed had its name
              changed or is temporarily unavailable :(
            </p>
            <br />
            <Link to="/" className="btn btn-warning text-center">
              Home page
            </Link>
          </div>
          {/* <div className="col-sm-4"></div> */}
        </div>
      </div>
    </>
  );
};

export default Pagenotfount;
