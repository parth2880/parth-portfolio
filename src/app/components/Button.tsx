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

  const baseClass = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
    outline: "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const defaultClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]}`;

  const props: any = {
    className: `${defaultClass} ${className || ""}`.trim(),
  };

  if (to) {
    props.href = to;
  }

  return React.createElement(Tag, props, children || "Button");
};

export default Button;