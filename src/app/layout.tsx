import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manishbisht.dev"),
  title: "Manish Bisht — Freelance Full-Stack Developer",
  description:
    "Freelance full-stack developer from Uttarakhand, India. I build clean, modern, and high-performance websites and web applications for businesses, startups, and ambitious ideas.",
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
    title: "Manish Bisht — Freelance Full-Stack Developer",
    description:
      "I build clean, modern, and high-performance digital experiences for businesses, startups, and ambitious ideas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manish Bisht — Freelance Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Bisht — Freelance Full-Stack Developer",
    description:
      "I build clean, modern, and high-performance digital experiences.",
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
      <head>
        <link rel="canonical" href="https://manishbisht.dev" />
      </head>
      <body className="bg-white text-[#171717] antialiased">
        {children}
      </body>
    </html>
  );
}
