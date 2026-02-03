import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">
        <BsHouseDoor /> Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
