import React from "react";

import { Button } from "../button/Button";
import { useStaticQuery, graphql, Link } from "gatsby";

export const Header: React.FC = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/prototype.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <nav className="w-full flex flex-col items-center lg:flex-row items-center justify-between flex-wrap bg-white p-5 border-b border-gray-300">
      <a className="mb-2 lg:mb-0 inline-block flex items-center flex-shrink-0 text-black" href="https://mastermovies.uk">
        <img src={logo.publicURL} className="mr-2 fill-current h-8 w-8 pointer-events-none" />
        <span className="font-semibold text-xl tracking-tight select-none">
          MasterMovies <span className="font-light">Labs</span>
        </span>
        <div className="hidden lg:inline-block ml-12">
          <Link to="/">Home</Link>
        </div>

      </a>
      <div className="flex-1" />
      <div>
        <a href="https://mastermovies.uk">
          <a href="https://mastermovies.uk">
            <Button>Main website</Button>
          </a>
        </a>
      </div>
    </nav>
  );
};
