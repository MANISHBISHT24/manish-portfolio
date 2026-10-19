import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionPreferenceProvider from "@/components/MotionPreferenceProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manishbisht.dev"),
  title: "Manish Bisht — Freelance Web Developer",
  description:
    "Freelance web developer in Uttarakhand, India. Portfolio and contact details for Manish Bisht.",
  alternates: { canonical: "/" },
  keywords: [
    "freelance developer",
    "full-stack developer",
    "web developer India",
    "React developer",
    "Next.js developer",
    "Manish Bisht",
    "Uttarakhand developer",
  ],
  authors: [{ name: "Manish Bisht" }],
  creator: "Manish Bisht",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://manishbisht.dev",
    siteName: "Manish Bisht",
    title: "Manish Bisht — Freelance Web Developer",
    description:
      "Portfolio and contact details for Manish Bisht, freelance web developer in Uttarakhand, India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manish Bisht — Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Bisht — Freelance Web Developer",
    description:
      "Portfolio and contact details for Manish Bisht, freelance web developer in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#171717] antialiased">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <MotionPreferenceProvider>{children}</MotionPreferenceProvider>
      </body>
    </html>
  );
}
