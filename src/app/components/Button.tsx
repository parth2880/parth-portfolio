"use client";

import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  to?: string;
};

// Define a more specific type for props instead of using 'any'
type ButtonProps = {
  className: string;
  href?: string;
};

const Button: React.FC<Props> = ({ children, className, to }) => {
  const Tag = to ? "a" : "button";

  const defaultClass =
    "flex gap-2 items-center py-2 px-4 border border-primary hover:bg-primary/20 transition-colors duration-200 cursor-pointer max-w-max";

  const props: ButtonProps = {
    className: `${defaultClass} ${className || ""}`.trim(),
  };
  
  // Add href only if 'to' exists
  if (to) {
    props.href = to;
  }

  return React.createElement(Tag, props, children || "Button");
};

export default Button;