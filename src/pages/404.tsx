import { Link } from "gatsby";
import React from "react";

import { Button } from "../components/button/Button";
import { SEO } from "../components/seo/Seo";

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404 | Not found" />
    <div className="h-screen flex flex-col justify-center items-center select-none">
      <div className="flex flex-row items-center">
        <div className="text-2xl font-bold">404</div>
        <div className="mx-8 h-16 w-px bg-gray-400" />
        <div className="text-lg text-gray-700">This page could not be found</div>
      </div>
      <div className="mt-6">
        <Button className="mr-4" onClick={() => window.history.back()}>Back</Button>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  </>
);

export default NotFoundPage;
