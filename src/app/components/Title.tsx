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
        "flex items-center text-2xl md:text-[2rem] lg:text-3xl after:ml-4 after:border after:border-primary after:w-full after:h-px after:content-[''] relative group hover-scale scroll-animate",
        className
      )}
    >
      <span
        className="text-primary font-semibold hover:scale-110 hover:rotate-6 transition-transform duration-200"
      >
        #
      </span>
      <span
        id={id}
        className="min-w-max ml-2 hover:text-primary transition-colors duration-200"
      >
        {children || "title"}
      </span>

      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-400 w-0 group-hover:w-full transition-all duration-800 ease-out" />
    </h2>
  );
};

export default Title;
