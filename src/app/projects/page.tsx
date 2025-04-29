import type { Metadata } from "next";
import ProjectsClient from '@/components/ProjectsClient';

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of my projects. Placeholder projects page description.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
