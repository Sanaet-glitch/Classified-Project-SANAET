"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold text-white tracking-wider">
          {/* Placeholder for logo or name */}
          My Portfolio
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
          <li><Link href="/resume" className="hover:text-blue-400 transition-colors">Resume</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-6 animate-fade-in bg-white/80 backdrop-blur-lg border-b border-white/20">
          <li><Link href="/" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/projects" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link href="/blog" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/resume" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Resume</Link></li>
          <li><Link href="/contact" className="block w-full text-center py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
}
