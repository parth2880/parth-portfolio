'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import { useActiveSection } from '../hooks/useActiveSection';

type NavItem = {
  label: string;
  href: string;
  section: string;
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Projects', href: '#projects', section: 'projects' },
    { label: 'Skills', href: '#skills', section: 'skills' },
    { label: 'About', href: '#about-me', section: 'about-me' },
    { label: 'Contact', href: '#contacts', section: 'contacts' },
  ];

  const isActive = (item: NavItem) => {
    if (item.section === 'home') {
      return activeSection === 'home' || (pathname === '/' && !activeSection);
    }
    return activeSection === item.section;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale">
            <Logo size="md" variant="default" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-colors text-sm lg:text-base ${active
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                    }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                  {active && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                className="md:hidden p-1.5 sm:p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors text-sm sm:text-base ${active
                      ? 'text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                      }`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;