import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish | Software Engineer",
  description: "Software Engineer specializing at the intersection of Distributed Systems and Generative AI. Expert in architecting high-throughput, event-driven microservices and resilient AI platforms that perform reliably at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Set data-theme="light" to activate the Cream/Blue theme.
         Remove the attribute entirely to go back to Dark Mode.
      */}
      <body className={inter.className} data-theme="light">
        {children}
      </body>
    </html>
  );
}