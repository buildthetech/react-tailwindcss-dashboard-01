import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/buttons";

const PageNotFoundView = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute inset-0">
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <p className="text-9xl font-bold">404</p>
        <p className="text-3xl font-medium">Page not found 😥</p>
        <Link to="/">
          <Button name="Go Home" type="primary" size="md" />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFoundView;
