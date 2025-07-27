import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 scroll-animate">
        {children}
      </h2>
      <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-primary rounded-full mx-auto scroll-animate" style={{ animationDelay: '0.1s' }} />
    </div>
  );
};

export default Title;
