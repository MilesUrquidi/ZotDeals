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
  metadataBase: new URL("https://www.zotdeals.me"),
  title: "ZotDeals — Free Stuff & Student Discounts for UCI Students",
  description:
    "The complete list of UCI student discounts, free software, and perks. Everything your .edu email unlocks — 30+ free tools, subscriptions, and savings in one place.",
  openGraph: {
    title: "ZotDeals — Free Stuff & Student Discounts for UCI Students",
    description:
      "The complete list of UCI student discounts, free software, and perks. Everything your .edu email unlocks — 30+ free tools, subscriptions, and savings in one place.",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZotDeals — Free Stuff & Student Discounts for UCI Students",
    description:
      "The complete list of UCI student discounts, free software, and perks. Everything your .edu email unlocks — 30+ free tools, subscriptions, and savings in one place.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://www.zotdeals.me",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ZotDeals",
              url: "https://www.zotdeals.me",
              description:
                "Free stuff and student discounts for UCI students. Every perk your .edu email unlocks in one place.",
            }),
          }}
        />
      </body>
    </html>
  );
}
