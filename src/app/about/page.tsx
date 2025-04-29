"use client";

import { motion } from "framer-motion";
import GlassCard from '@/components/GlassCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <motion.section
      className="max-w-3xl mx-auto py-16 px-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg mt-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <GlassCard>
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-gray-300 text-lg mb-4 text-center">
          [Your professional bio goes here.]
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2 text-white">Skills</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>MDX / Markdown</li>
              <li>Git & Version Control</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2 text-white">Experience</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>[Job Title] at [Company] (20XX–20XX)</li>
              <li>[Job Title] at [Company] (20XX–20XX)</li>
              <li>[Freelance/Personal Projects]</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 text-white">Education</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>[Your Degree], [Your University], [Year]</li>
          </ul>
        </div>
      </GlassCard>
    </motion.section>
  );
}
