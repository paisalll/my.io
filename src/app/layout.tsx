import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Faizal Triasa | Full-Stack Developer",
  description:
    "Full-Stack Developer dengan 4 tahun pengalaman membangun aplikasi web modern. Spesialis React, Node.js, Laravel — dari enterprise dashboard hingga platform e-commerce.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "Laravel",
    "Next.js",
    "Web Developer Indonesia",
    "Frontend Developer",
    "Backend Developer",
    "Muhammad Faizal",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Faizal Triasa" }],
  creator: "Muhammad Faizal Triasa",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://faizal.dev",
    title: "Muhammad Faizal Triasa | Full-Stack Developer",
    description:
      "Full-Stack Developer dengan 4 tahun pengalaman. Saya bantu bisnis Anda tumbuh lewat solusi digital yang cepat, cantik, dan mudah dipakai.",
    siteName: "Faizal Dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faizal Triasa | Full-Stack Developer",
    description:
      "Full-Stack Developer dengan 4 tahun pengalaman membangun aplikasi web modern.",
    creator: "@faizaltriasa",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sora.variable} ${outfit.variable}`}>
      <body className="bg-[#080B12] text-white antialiased">{children}</body>
    </html>
  );
}
