import type { Metadata } from "next";
import ResumeClient from '@/components/ResumeClient';

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my resume and see my experience. Placeholder resume page description.",
};

export default function ResumePage() {
  return <ResumeClient />;
}
