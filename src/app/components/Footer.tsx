"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Phone, Mail, Code, Heart } from "lucide-react";

type FooterItem = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const Footer: React.FC = () => {
  const footerItems: FooterItem[] = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/parth2880",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/parthsharma2880/",
      label: "LinkedIn"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+91-7876800210",
      label: "Phone"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:parthinteract@gmail.com",
      label: "Email"
    },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-secondary/20 py-12 mt-20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left section */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div
              className="flex items-center justify-center lg:justify-start space-x-3 mb-4 hover-scale"
            >
              <div className="animate-rotate-slow">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span
                className="font-bold text-xl animate-gradient-shift hover-scale"
              >
                Parth
              </span>
            </div>

            <p className="text-secondary mb-2 animate-fade-in stagger-1">
              Web designer and front-end developer
            </p>

            <a
              href="mailto:parthinteract@gmail.com"
              className="text-secondary hover:text-primary transition-colors animate-fade-in stagger-2"
            >
              parthinteract@gmail.com
            </a>
          </div>

          {/* Right section - Social links */}
          <div className="text-center lg:text-right animate-slide-in-right">
            <p className="text-white font-semibold mb-4 animate-fade-in stagger-1">
              Let's connect
            </p>

            <div className="flex justify-center lg:justify-end space-x-4 animate-fade-in stagger-2">
              {footerItems.map((item, index) => (
                <div
                  key={item.href}
                  className="animate-scale-pulse"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group hover-lift hover-glow"
                    title={item.label}
                  >
                    <div className="hover:rotate-360 transition-transform duration-600">
                      {item.icon}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center animate-fade-in stagger-3">
          <div className="text-secondary flex items-center justify-center gap-2 hover-scale">
            <span>© Copyright 2025. Made with</span>
            <div className="animate-scale-pulse">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            <span>by Parth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
