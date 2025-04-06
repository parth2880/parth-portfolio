// components/Header.tsx
'use client'; // Add this line to indicate this is a client component
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        // Close menu when resizing to desktop
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };
      
      // Set initial value
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Close menu when clicking a link
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
    <header className="w-full py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/icons/site-logo.svg" alt="site logo" width={16} height={16} />
          <span className="font-semibold">Parth</span>
        </div>
        
        {/* Hamburger icon for mobile */}
        {isMobile && (
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>
        )}
        
        {/* Desktop navigation */}
        <nav className={`md:flex items-center space-x-8 ${isMobile ? 'hidden' : 'flex'}`}>
          {navItems.map((item) => (
            <Link 
              href={item.href} 
              key={item.href}
              className={`relative ${
                pathname === item.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              <span className="mr-1">#</span>
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile navigation overlay */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link 
                  href={item.href} 
                  key={item.href}
                  className={`text-xl ${
                    pathname === item.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="mr-1">#</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;