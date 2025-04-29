import type { Metadata } from "next";
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio. Explore my projects, blog, and more. Placeholder home page description.",
};

export default function HomePage() {
  return <HomeClient />;
}
