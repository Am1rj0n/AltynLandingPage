import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Altyn — Enterprise Synthetic Financial Data Platform",
  description: "Generate privacy-safe synthetic financial datasets that statistically mimic real banking and payment behavior. Built for fintech startups, banks, fraud teams, and AI researchers.",
  keywords: ["synthetic data", "fintech", "fraud detection", "financial data", "AI", "machine learning", "banking", "compliance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen bg-surface-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
