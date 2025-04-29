"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        className="text-center py-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm a passionate web developer specializing in creating modern and performant web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            View Projects
          </Link>
          <Link href="/blog" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Read Blog
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-12 px-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <GlassCard>
          <h2 className="text-3xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="text-center text-gray-400 max-w-3xl mx-auto space-y-4">
            <p>
              Hi! I'm <span className="font-semibold text-white">Your Name</span>, a creative frontend developer passionate about building beautiful, performant, and accessible web experiences. I love working with modern technologies like React, Next.js, and Tailwind CSS, and I'm always exploring new ways to push the boundaries of web design.
            </p>
            <p>
              <span className="font-semibold text-white">Skills:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion, MDX, Git, REST APIs
            </p>
            <p>
              <span className="font-semibold text-white">Interests:</span> UI/UX, creative coding, glassmorphism, design systems, and web animation.
            </p>
          </div>
        </GlassCard>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassCard className="flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-white">SmartCampus</h3>
            <p className="text-gray-300 mb-4">A modern campus management platform with real-time dashboards, scheduling, and communication tools. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
            <div className="flex space-x-4 mt-auto">
              <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">GitHub</Button>
              <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">Live Demo</Button>
            </div>
          </GlassCard>
          <GlassCard className="flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-white">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">This very site! A glassmorphism-themed portfolio with blog, project showcases, and smooth animations. Built with Next.js, MDX, and Tailwind CSS.</p>
            <div className="flex space-x-4 mt-auto">
              <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">GitHub</Button>
              <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">Live Demo</Button>
            </div>
          </GlassCard>
        </div>
        <p className="text-center text-gray-500 mt-8">
          [More projects coming soon...]
        </p>
      </motion.section>
    </div>
  );
}
