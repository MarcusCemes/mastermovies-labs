import cn from "classnames";
import React from "react";

/* CLASSES */
const BASE_CLASSES = "py-1 px-4 transition-colors duration-200 focus:outline-none";
const BUTTON_CLASSES = {
  default: "text-gray-800 border border-gray-300 shadow-sm rounded-sm hover:text-primary hover:border-primary focus:text-primary focus:border-primary active:text-primaryFocus active:border-primaryFocus",
  link: "bg-transparent text-blue-500 hover:text-blue-400 focus:text-blue-600",
};

/* TYPES */
interface ButtonProps {
  variant?: keyof typeof BUTTON_CLASSES;
}


export const Button: React.FC<JSX.IntrinsicElements["button"] & ButtonProps> = ({
  variant = "default",
  className,
  ...rest
}) => (
  <button
    className={cn(
      BASE_CLASSES,
      BUTTON_CLASSES[variant],
      className
    )}
    {...rest}
  />
);
