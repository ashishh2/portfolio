import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the standard Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Software Engineer Portfolio",
  description: "Architecting Scalable Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-dark text-slate-300 relative min-h-screen overflow-x-hidden`}>
        {/* Fixed Mesh Gradient Background - Stays still while you scroll */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
        </div>
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}