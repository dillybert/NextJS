import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyApp - Modern Next.js Application",
  description: "A beautiful Next.js application with multiple pages and modern design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
