"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="relative bg-gradient-to-t from-gray-900/80 via-gray-800/70 to-white/5 backdrop-blur-lg border-t border-white/10 shadow-2xl shadow-black/40 text-gray-300 py-6 px-6 mt-12 text-center text-sm overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-cyan-400/30 via-white/20 to-purple-400/30 blur-lg rounded-full pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
