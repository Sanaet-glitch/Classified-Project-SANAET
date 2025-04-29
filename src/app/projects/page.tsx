import type { Metadata } from "next";
// import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of my projects. Placeholder projects page description.",
};

export default function ProjectsPage() {
  return (
    <section
      className="max-w-5xl mx-auto py-16 px-4"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard className="flex flex-col min-h-[220px]">
          <h2 className="text-xl font-semibold mb-2 text-white">SmartCampus</h2>
          <p className="text-gray-300 mb-4">A modern campus management platform with real-time dashboards, scheduling, and communication tools. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
          <div className="flex space-x-4 mt-auto">
            <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">GitHub</Button>
            <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">Live Demo</Button>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col min-h-[220px]">
          <h2 className="text-xl font-semibold mb-2 text-white">Portfolio Website</h2>
          <p className="text-gray-300 mb-4">This very site! A glassmorphism-themed portfolio with blog, project showcases, and smooth animations. Built with Next.js, MDX, and Tailwind CSS.</p>
          <div className="flex space-x-4 mt-auto">
            <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">GitHub</Button>
            <Button href="#" className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">Live Demo</Button>
          </div>
        </GlassCard>
      </div>
      <p className="text-center text-gray-500 mt-8">[More projects coming soon...]</p>
    </section>
  );
}
