import React from "react";

export const Tag: React.FC = ({ children }) => (
  <span
    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-300 select-none"
    children={children}
  />
);
