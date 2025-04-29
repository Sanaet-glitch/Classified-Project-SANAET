import type { Metadata } from "next";
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my skills, and experience. Placeholder about page description.",
};

export default function AboutPage() {
  return <AboutClient />;
}
