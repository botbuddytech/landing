import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "BotBuddy - AI-powered Shopify Apps & SaaS",
  description: "Landing page for BotBuddy - AI-powered Shopify Apps & Saas apps",
  keywords: ["Shopify Apps", "SaaS", "AI-powered", "E-commerce", "BotBuddy"],
  authors: [{ name: "BotBuddy" }],
  creator: "BotBuddy",
  publisher: "BotBuddy",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "BotBuddy - AI-powered Shopify Apps & SaaS",
    description: "Landing page for BotBuddy - AI-powered Shopify Apps & Saas apps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotBuddy - AI-powered Shopify Apps & SaaS",
    description: "Landing page for BotBuddy - AI-powered Shopify Apps & Saas apps",
  },
  other: {
    'X-DNS-Prefetch-Control': 'on',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
