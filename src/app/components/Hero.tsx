"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowDown, Code, Palette, Smartphone } from "lucide-react";
import { useLenis } from "../hooks/useLenis";

const Hero: React.FC = () => {
  const lenis = useLenis();
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Mouse parallax effect for floating elements
      if (floatingRef1.current && floatingRef2.current) {
        const rect = heroRef.current?.getBoundingClientRect();
        if (rect) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const moveX1 = (e.clientX - centerX) * 0.02;
          const moveY1 = (e.clientY - centerY) * 0.02;
          const moveX2 = (e.clientX - centerX) * -0.015;
          const moveY2 = (e.clientY - centerY) * -0.015;

          floatingRef1.current.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
          floatingRef2.current.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse follower effect
  useEffect(() => {
    if (mouseFollowerRef.current) {
      mouseFollowerRef.current.style.left = `${mousePosition.x}px`;
      mouseFollowerRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  useEffect(() => {
    if (!lenis || !heroRef.current) return;

    const handleScroll = (e: any) => {
      const { scroll } = e;
      const heroRect = heroRef.current?.getBoundingClientRect();

      if (heroRect && heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        // Parallax effect for the image
        if (imageRef.current) {
          const y = scroll * 0.1;
          imageRef.current.style.transform = `translateY(${y}px)`;
        }
      }
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  const skills = [
    { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Frontend Development" },
    { icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, text: "UI/UX Design" },
    { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Responsive Design" },
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Mouse follower */}
      <div
        ref={mouseFollowerRef}
        className="fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground animate-fadeIn stagger-1 hover-lift">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fadeIn stagger-2">
                <span className="gradient-text typing-animation">Parth Sharma</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-foreground font-medium animate-fadeIn stagger-3 hover-lift">
                Web Designer & Frontend Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fadeIn stagger-4 hover-lift">
              I craft beautiful, responsive websites that combine modern design with exceptional user experience.
              Let's bring your ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeIn stagger-5">
              <Button to="#projects" size="lg" className="hover-glow">
                View My Work
              </Button>
              <Button to="#contacts" variant="outline" size="lg" className="hover-glow">
                Get In Touch
              </Button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 justify-center lg:justify-start animate-fadeIn stagger-5">
              {skills.map((skill, index) => (
                <div
                  key={skill.text}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted rounded-full text-xs sm:text-sm font-medium skill-badge cursor-pointer"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {skill.icon}
                  <span className="hidden sm:inline">{skill.text}</span>
                  <span className="sm:hidden">{skill.text.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div ref={imageRef} className="relative animate-scaleIn order-first lg:order-last group">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl group-hover:blur-3xl sm:group-hover:blur-4xl transition-all duration-500" />

              {/* Main image */}
              <div className="relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-all duration-500 hover-lift">
                <Image
                  src="/images/parth-hero.png"
                  alt="Parth Sharma - Web Designer and Frontend Developer"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating elements with parallax */}
              <div
                ref={floatingRef1}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full animate-float hover:bg-primary/30 transition-colors duration-300"
              />
              <div
                ref={floatingRef2}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full animate-float hover:bg-purple-500/30 transition-colors duration-300"
                style={{ animationDelay: '1s' }}
              />
            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-background border border-border px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover-lift">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn hover-lift" style={{ animationDelay: '2s' }}>
          <button
            onClick={() => {
              if (lenis) {
                lenis.scrollTo('#projects', { duration: 2 });
              } else {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;