import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio. Explore my projects, blog, and more. Placeholder home page description.",
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section
        className="text-center py-16"
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
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 px-6 max-w-3xl mx-auto"
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
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12"
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
      </section>
    </div>
  );
}
