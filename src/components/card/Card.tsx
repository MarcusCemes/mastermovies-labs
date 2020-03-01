import React, { ReactNode } from "react";

import { Tag } from "../tag/Tag";

interface CardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  cover?: ReactNode;
  overlay?: ReactNode;
  tags?: string[];
}

export const Card: React.FC<CardProps> = ({ title, subtitle, overlay, cover, tags = [], children }) => (
  <div className="relative w-screen max-w-sm rounded overflow-hidden shadow-lg bg-white">
    {cover && (
      <div className="relative pb-2/3">
        <div className="absolute inset-0 pointer-events-none">{cover}</div>
      </div>
    )}

    {(title || subtitle || children) && (
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-1" children={title} />}
        {subtitle && <div className="mb-2 text-gray-800 font-light text-sm uppercase" children={subtitle} />}
        {children && <div className="text-gray-700 text-base">{children}</div>}
      </div>
    )}

    {tags.length > 0 && (
      <div className="px-6 py-4">
        {tags.map(tag => (
          <Tag key={`tag-${tag}`} children={tag} />
        ))}
      </div>
    )}

    {overlay}
  </div>
);
