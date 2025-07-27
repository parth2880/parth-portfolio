// components/Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };

      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navItems: NavItem[] = [
    { label: 'home', href: '/' },
    { label: 'projects', href: '#projects' },
    { label: 'skills', href: '#skills' },
    { label: 'about-me', href: '#about-me' },
    { label: 'contacts', href: '#contacts' },
  ];

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-up ${scrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-secondary/20 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 hover-scale"
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

        {/* Hamburger icon for mobile */}
        {isMobile && (
          <button
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-secondary/10 transition-colors hover-scale"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 absolute inset-0 rotate-0 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 absolute inset-0 rotate-0 transition-transform duration-200" />
              )}
            </div>
          </button>
        )}

        {/* Desktop navigation */}
        <nav className={`md:flex items-center space-x-8 ${isMobile ? 'hidden' : 'flex'}`}>
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link
                href={item.href}
                className={`relative group ${pathname === item.href ? 'text-primary' : 'text-secondary hover:text-white'
                  } transition-colors duration-300`}
                onClick={handleLinkClick}
              >
                <span
                  className="mr-1 text-primary hover:scale-110 hover:rotate-6 transition-transform duration-200"
                >
                  #
                </span>
                {item.label}

                {/* Hover underline */}
                <div className="absolute -bottom-1 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile navigation overlay */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center animate-fade-in">
            <nav className="flex flex-col items-center space-y-8 animate-slide-up">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={item.href}
                    className={`text-2xl font-medium ${pathname === item.href ? 'text-primary' : 'text-secondary hover:text-white'
                      } transition-colors duration-300`}
                    onClick={handleLinkClick}
                  >
                    <span
                      className="mr-2 text-primary hover:scale-110 hover:rotate-6 transition-transform duration-200"
                    >
                      #
                    </span>
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;