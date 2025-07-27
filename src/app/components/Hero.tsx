// components/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { MousePointer, Code, Palette, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { icon: <Code className="w-6 h-6" />, text: "Frontend Developer" },
    { icon: <Palette className="w-6 h-6" />, text: "UI/UX Designer" },
    { icon: <MousePointer className="w-6 h-6" />, text: "Interactive Design" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-400/30 animate-gradient-shift"></div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full animate-float"
          style={{
            left: `${(i * 15) % 100}%`,
            top: `${(i * 20 + 10) % 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl mx-auto px-4">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left animate-slide-in-left">
          <div className="mb-4 animate-fade-in stagger-1">
            <span className="text-secondary text-lg">Hello, I'm</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up stagger-2">
            <span className="animate-gradient-shift">Parth Sharma</span>
          </h1>

          <div className="text-xl md:text-2xl text-secondary mb-8 animate-slide-up stagger-3">
            <span className="text-purple-400 font-semibold">Web Designer</span> &{" "}
            <span className="text-purple-400 font-semibold">Front-end Developer</span>
          </div>

          <p className="text-secondary text-lg mb-8 max-w-md mx-auto md:mx-0 animate-slide-up stagger-4">
            I craft responsive websites where technologies meet creativity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up stagger-5">
            <div className="hover-scale">
              <Button to="#contacts">Contact me !!</Button>
            </div>
            <div className="hover-scale">
              <Button to="#projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 animate-fade-in stagger-5">
            {skills.map((skill, index) => (
              <div
                key={skill.text}
                className="flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full text-sm hover-scale hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {skill.icon}
                <span>{skill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Hero image */}
        <div className="flex-1 relative animate-slide-in-right">
          <div className="relative animate-float">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-primary/30 rounded-full animate-rotate-slow" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-secondary/30 rounded-full animate-rotate-reverse" />

            <Image
              src="/images/parth-hero.png"
              alt="Parth Sharma - Web Designer and Front-end Developer"
              width={457}
              height={386}
              className="relative z-10 animate-float"
            />

            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl animate-glow-pulse" />
          </div>

          {/* Status indicator */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background border border-secondary px-6 py-3 rounded-full flex items-center gap-3 animate-pulse-glow">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse shrink-0" />
            <span className="text-secondary">Currently working on</span>
            <span className="text-purple-400 font-semibold">Portfolio</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2s' }}>
        <div
          className="flex flex-col items-center gap-2 text-secondary cursor-pointer animate-bounce-subtle"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;