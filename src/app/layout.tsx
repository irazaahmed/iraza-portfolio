import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Nastaliq script for Urdu blog content - gives the Jameel Noori Nastaleeq look
// while staying free / web-optimized.
const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const title = "Ahmed Raza - AI Solutions Expert";
const description =
  "Portfolio of Ahmed Raza - bridging authentic Islamic knowledge with cutting-edge AI technology. Team Lead Translation at Dawat-e-Islami, Founder of Cybrum Solutions, full-stack developer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ahmed Raza",
    "Islamic Scholar",
    "AI Solutions Expert",
    "Full Stack Developer",
    "Translation Lead",
    "Agentic AI",
    "Next.js",
  ],
  authors: [{ name: "Ahmed Raza" }],
  alternates: { canonical: "/" },
  verification: {
    google: "dB_ZqeUfYuOAQBFR8qYgWp43mN9teYMPgUkdUBXmNQI",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ahmed Raza",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${nastaliq.variable} h-full`}>
      <body className="min-h-full antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
