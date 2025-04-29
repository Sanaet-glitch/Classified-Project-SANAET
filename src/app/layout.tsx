import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "My Portfolio", // Default title
  description: "A personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-gray-950 text-white flex flex-col min-h-screen relative overflow-x-hidden`}>
        {/* Animated background accent */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 w-[80vw] h-[80vw] -translate-x-1/2 bg-gradient-to-tr from-neon-blue via-neon-pink to-neon-green opacity-30 blur-3xl animate-pulse-slow rounded-full" />
        </div>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
