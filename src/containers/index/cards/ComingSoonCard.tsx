import React from "react";

import { Card } from "../../../components/card/Card";

export const ComingSoonCard: React.FC = () => (
  <Card
    overlay={
      <div className="w-full h-full p-8 flex flex-col lg:justify-center text-center text-gray-600 font-light select-none">
        Coming soon
      </div>
    }
  />
);
