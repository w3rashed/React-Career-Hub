import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-9xl my-10">opps..............</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default ErrorPage;
