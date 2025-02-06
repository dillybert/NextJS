import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobile App",
  description: "A mobile-first web application",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F2F7] text-[#000000] antialiased min-h-screen`}>
        <Navbar />
        <main className="max-w-[480px] mx-auto min-h-[calc(100vh-3rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
