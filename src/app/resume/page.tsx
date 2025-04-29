import type { Metadata } from "next";
// import { motion } from "framer-motion"; // Temporarily commenting out
import Link from "next/link";
import GlassCard from '@/components/GlassCard'; // Fixed import path
import Button from '@/components/Button'; // Fixed import path

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my resume and see my experience. Placeholder resume page description.",
};

// const sectionVariants = { // Temporarily commenting out
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

export default function ResumePage() {
  return (
    <section // Changed from motion.section
      className="max-w-3xl mx-auto py-16 px-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg mt-8"
      // initial="hidden" // Removed motion props
      // animate="visible" // Removed motion props
      // variants={sectionVariants} // Removed motion props
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Resume</h1>
      <div className="flex flex-col items-center">
        <Button href="/resume.pdf" className="mb-8 border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">
          Download Resume (PDF)
        </Button>
        <GlassCard className="w-full space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">Summary</h2>
            <p className="text-gray-300">[Brief professional summary goes here.]</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">Skills</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>MDX / Markdown</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">Experience</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>[Job Title] at [Company] (20XX–20XX)</li>
              <li>[Job Title] at [Company] (20XX–20XX)</li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
