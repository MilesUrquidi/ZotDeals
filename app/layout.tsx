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
  title: "ZotDeals — Free Stuff & Deals for UCI Students",
  description:
    "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
  openGraph: {
    title: "ZotDeals — Free Tools & Discounts for UCI Students",
    description:
      "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 740 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZotDeals — Free Tools & Discounts for UCI Students",
    description:
      "Free stuff and student discounts for UCI students. Every deal your .edu email unlocks — 30+ free tools, subscriptions, and savings all in one place.",
    images: ["/og-image.png"],
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
