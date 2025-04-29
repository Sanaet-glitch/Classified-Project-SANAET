"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      className="backdrop-blur-lg bg-gradient-to-br from-white/10 via-gray-900/60 to-purple-900/30 border-b border-white/10 shadow-2xl shadow-black/40 sticky top-0 z-50 overflow-hidden"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-cyan-400/30 via-white/20 to-purple-400/30 blur-lg rounded-full pointer-events-none" />
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative z-10">
        <Link href="/" className="text-xl font-bold text-white tracking-wider drop-shadow-lg">
          My Portfolio
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Home</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">About</Link></li>
          <li><Link href="/projects" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Blog</Link></li>
          <li><Link href="/resume" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Resume</Link></li>
          <li><Link href="/contact" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Contact</Link></li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
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
          <li><Link href="/" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/projects" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link href="/blog" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/resume" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>Resume</Link></li>
          <li><Link href="/contact" className="block w-full text-center py-2 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </motion.header>
  );
}
