import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description: "A personal portfolio website built with Next.js. Placeholder description for SEO.",
  openGraph: {
    title: "My Portfolio",
    description: "A personal portfolio website built with Next.js. Placeholder Open Graph description.",
    url: "https://your-portfolio-url.com/", // TODO: Replace with real URL
    siteName: "My Portfolio",
    images: [
      {
        url: "/vercel.svg", // Placeholder image
        width: 1200,
        height: 630,
        alt: "My Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "A personal portfolio website built with Next.js. Placeholder Twitter description.",
    images: ["/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-gray-950 text-white flex flex-col min-h-screen relative overflow-x-hidden`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-neon-blue text-gray-900 font-bold px-4 py-2 rounded shadow-neon-blue transition-all">Skip to main content</a>
        {/* Animated background accent */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 w-[80vw] h-[80vw] -translate-x-1/2 bg-gradient-to-tr from-neon-blue via-neon-pink to-neon-green opacity-30 blur-3xl animate-pulse-slow rounded-full" />
        </div>
        <Header />
        {/* Section background overlay for 3D/glass effect */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-full h-full z-0">
          <div className="w-full h-full bg-gradient-to-br from-white/5 via-cyan-500/5 to-purple-700/10 opacity-60 blur-2xl" />
          {/* Optional SVG shape for extra depth */}
          <svg className="absolute right-0 top-0 w-1/3 h-1/3 opacity-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="100" rx="100" ry="80" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(100 100) scale(100 80)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67e8f9" stopOpacity="0.5" />
                <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <main id="main-content" role="main" className="flex-grow container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
