import { Link } from "gatsby";
import React from "react";

import { Button } from "../../../components/button/Button";
import { Layout } from "../../../components/layout/Layout";

const DifferentialEquation: React.FC = () => (
  <Layout className="flex flex-col justify-center">
    <div className="h-full flex justify-center items-center select-none text-lg font-gray-800">
      Not implemented –
      <Link to="/">
        <Button variant="link">Home</Button>
      </Link>
    </div>
  </Layout>
);

export default DifferentialEquation;
