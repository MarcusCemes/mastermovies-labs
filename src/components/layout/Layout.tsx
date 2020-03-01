import cn from "classnames";
import React from "react";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout: React.FC<JSX.IntrinsicElements["div"]> = ({ className, ...rest }) => (
  <div className="flex flex-col min-h-screen">
    <noscript>
      <div className="w-full px-8 py-4 bg-red-600 text-white select-none">
        <div className="text-center font-semibold">
          You have JavaScript disabled in your browser, the foundation for these experiments.{" "}
          <a href="https://enablejavascript.co/" className="underline">
            Learn more
          </a>
        </div>
      </div>
    </noscript>

    <Header />
    <div className={cn("relative flex-auto", className)} {...rest} />
    <Footer />
  </div>
);
