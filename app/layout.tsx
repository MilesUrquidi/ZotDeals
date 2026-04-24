import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZotDeals",
  description:
    "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
  openGraph: {
    title: "ZotDeals",
    description:
      "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ZotDeals",
    description:
      "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
