import type { Metadata } from "next";
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for collaborations, project inquiries, or just to say hi. Placeholder contact page description.",
};

export default function ContactPage() {
  return <ContactClient />;
}
