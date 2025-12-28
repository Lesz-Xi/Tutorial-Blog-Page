// Imports from Next.js to handle fonts and metadata
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure local fonts (Geist Sans and Mono) to be used throughout the app
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This 'metadata' object controls what shows up in Google search results and browser tabs
export const metadata: Metadata = {
  title: "Tailwind CSS Tutorial Blog",
  description: "Learn how to use Tailwind CSS with this comprehensive guide.",
};

// The 'RootLayout' is the wrapper for EVERY page in your website.
// Everything you put here (like the <html> and <body> tags) appears on all pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'suppressHydrationWarning' stops errors from browser extensions adding extra attributes
    <html lang="en" suppressHydrationWarning>
      <body
        // Apply our custom fonts and 'antialiased' (makes text look smoother)
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 'children' represents the content of the specific page you are visiting (e.g., page.tsx) */}
        {children}
      </body>
    </html>
  );
}
