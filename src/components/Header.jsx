import React from 'react';

export default function Header({ brand, onScrollTo }) {
  const links = [
    ['Home', 'hero'],
    ['About', 'about'],
    ['Portfolio', 'projects'],
    ['Contact', 'contact'],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#05050d]/90 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => onScrollTo('hero')}
          className="max-w-[9rem] truncate text-left text-lg font-extrabold tracking-tight text-gradient sm:max-w-none sm:text-2xl"
        >
          {brand}
        </button>
        <nav className="flex items-center gap-3 text-sm font-bold text-textMuted sm:gap-8 sm:text-base">
          {links.map(([label, section]) => (
            <button
              key={section}
              type="button"
              onClick={() => onScrollTo(section)}
              className="nav-link"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
