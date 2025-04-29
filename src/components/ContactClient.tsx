'use client';

import { motion } from "framer-motion";
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactClient() {
  return (
    <motion.section
      className="max-w-xl mx-auto py-16 px-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg mt-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
      <p className="text-gray-300 text-lg mb-8 text-center">
        Feel free to reach out for collaborations, project inquiries, or just to say hi!
      </p>
      <GlassCard>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded bg-gray-800 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded bg-gray-800 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-200 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full rounded bg-gray-800 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <Button type="submit" className="w-full border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">Send Message</Button>
        </form>
      </GlassCard>
      <div className="mt-8 text-center text-gray-400">
        <p>Email: <a href="mailto:your@email.com" className="text-blue-400 hover:underline">your@email.com</a></p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </motion.section>
  );
}