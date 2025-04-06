"use client";

import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

const Title: React.FC<Props> = ({ children, className, id }) => {
  return (
    <h2
      className={twMerge(
        "flex items-center text-[2rem] after:ml-4 after:border after:border-primary after:w-full after:h-px after:content-['']",
        className
      )}
    >
      <span className="text-primary font-semibold"> # </span>
      <span id={id} className="min-w-max"> {children || "title"}</span>
    </h2>
  );
};

export default Title;
