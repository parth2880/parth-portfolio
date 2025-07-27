"use client";

import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<Props> = ({
  children,
  className,
  to,
  variant = "primary",
  size = "md"
}) => {
  const Tag = to ? "a" : "button";

  const baseClass = "flex gap-2 items-center justify-center font-medium transition-all duration-300 cursor-pointer max-w-max rounded-lg hover-scale";

  const variantClasses = {
    primary: "bg-primary text-white border border-primary hover:bg-primary/90 hover-glow shadow-lg",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-secondary border border-secondary/30 hover:bg-secondary/10 hover:border-secondary"
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg"
  };

  const defaultClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]}`;

  const props: any = {
    className: `${defaultClass} ${className || ""}`.trim(),
  };

  // Add href only if 'to' exists
  if (to) {
    props.href = to;
  }

  return React.createElement(Tag, props, children || "Button");
};

export default Button;