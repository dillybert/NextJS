'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => pathname === path;
  
  const navLinks = [
    { 
      name: 'Home',
      href: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Projects',
      href: '/projects',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: theme === 'light' ? '🌙' : '☀️',
      onClick: toggleTheme,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {theme === 'light' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          )}
        </svg>
      )
    },
    { 
      name: 'Contact',
      href: '/contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border h-[60px] z-50">
      <div className="max-w-[480px] mx-auto h-full">
        <div className="grid grid-cols-4 h-full">
          {navLinks.map((link) => {
            if (link.onClick) {
              return (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="flex flex-col items-center justify-center space-y-1 text-text-secondary active:opacity-60 transition-opacity"
                >
                  {link.icon}
                  <span className="text-xs font-medium">{link.name}</span>
                </button>
              );
            }
            
            const isActiveLink = isActive(link.href!);
            return (
              <Link
                key={link.name}
                href={link.href!}
                className={`flex flex-col items-center justify-center space-y-1 active:opacity-60 transition-opacity
                  ${isActiveLink ? 'text-button' : 'text-text-secondary'}`}
              >
                {link.icon}
                <span className="text-xs font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 