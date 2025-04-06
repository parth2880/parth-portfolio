"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

type FooterItem = {
  icon: string;
  href: string;
};

const Footer: React.FC = () => {
  const footerItems: FooterItem[] = [
    { icon: "mdi:github", href: "https://github.com/parth2880" },
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/parthsharma2880/",
    },
    { icon: "mdi:phone", href: "tel:+91-7876800210" },
    { icon: "mdi:email", href: "mailto:parthinteract@gmail.com" },
  ];

  return (
    <footer className="bg-background text-foreground py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/icons/site-logo.svg"
              alt="site logo"
              width={16}
              height={16}
            />
            <span className="">Parth</span>
            <span className="ml-4 text-secondary">parthinteract@gmail.com</span>
          </div>

          <p>Web designer and front-end developer</p>
        </div>

        <div>
          <div className="flex space-x-4">
            {footerItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon icon={item.icon} width={30} height={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-max mx-auto">
        <p className="text-secondary">© Copyright 2025. Made by Parth</p>
      </div>
    </footer>
  );
};

export default Footer;
