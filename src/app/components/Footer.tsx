"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://github.com/parth2880/", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.linkedin.com/in/parthsharma2880/", label: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#", label: "Instagram" },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, href: "mailto:parthinteract@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm">P</span>
              </div>
              <span className="font-bold text-lg sm:text-xl gradient-text">Parth Sharma</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              A passionate web designer and frontend developer creating beautiful,
              responsive websites that deliver exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                Projects
              </Link>
              <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                Skills
              </Link>
              <Link href="#about-me" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="#contacts" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <p>Kangra, H.P, India</p>
              <p>parthinteract@gmail.com</p>
              <p>+91 7876800210</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Parth Sharma. All rights reserved.
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2 bg-muted rounded-lg text-muted-foreground hover:text-primary hover-lift transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
