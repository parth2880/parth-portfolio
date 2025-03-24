// components/Header.tsx
'use client'; // Add this line to indicate this is a client component
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this instead of useRouter

type NavItem = {
  label: string;
  href: string;
};

const Header: React.FC = () => {
  const pathname = usePathname(); // Use pathname instead of router
  
  const navItems: NavItem[] = [
    { label: 'home', href: '/' },
    { label: 'works', href: '/works' },
    { label: 'about-me', href: '/about-me' },
    { label: 'contacts', href: '/contacts' },
  ];
  
  return (
    <header className="w-full py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Parth</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              href={item.href} 
              key={item.href}
              className={`relative ${
                pathname === item.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="mr-1">#</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;