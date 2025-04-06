// components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="relative text-white flex flex-col md:flex-row items-center gap-4.5">
      <div>
        <h1 className="text-2xl md:text-[32px] font-semibold mb-4 md:mb-8 leading-normal tracking-wide">
          <span className="">I&apos;m a</span>
          <span className="text-purple-400"> web designer </span> and
          <span className="text-purple-400"> front-end developer</span>
        </h1>

        <p className="text-secondary mb-6 mr-10">
          I craft responsive websites where technologies meet creativity
        </p>

        <Button to="#contacts">Contact me !!</Button>
      </div>

      <div className="relative block shrink-0">
        <Image
          src="/icons/structure1.svg"
          alt="structure"
          width={155}
          height={155}
          className="absolute top-22 -left-4"
        />
        <Image
          src="/images/parth-hero.png"
          alt="Elias - Web Designer and Front-end Developer"
          className="z-10 relative"
          width={457}
          height={386}
        />

        <div className="absolute -bottom-10.5 left-[50%] -translate-x-1/2 text-secondary bg-background w-full sm:w-[88%] border p-2 flex items-center space-x-2">
          <div className="size-4 bg-primary"></div>
          <span>Currently working on</span>
          <span className="text-purple-400 font-semibold">Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;