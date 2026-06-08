import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "Liz.dev | Frontend Developer",
    template: "%s | Liz.dev",
  },

  description:
    "Desarrolladora Frontend especializada en React, Next.js y VTEX. Construyo experiencias digitales modernas, funcionales y visualmente memorables.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "VTEX",
    "TypeScript",
    "UI Developer",
    "Web Developer",
    "Bogotá",
    "Colombia",
  ],

  authors: [
    {
      name: "Liz",
    },
  ],

  creator: "Liz",

  metadataBase: new URL("https://liz.3fic.co"),

  openGraph: {
    title: "Liz.dev | Frontend Developer",
    description:
      "Desarrollo interfaces modernas que combinan tecnología, estrategia y diseño.",

    url: "https://liz.3fic.co",

    siteName: "Liz.dev",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Liz.dev | Frontend Developer",
    description:
      "Desarrollo interfaces modernas que combinan tecnología, estrategia y diseño.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}