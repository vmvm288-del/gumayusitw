import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gumayusitw.com"),

  title: {
    default: "GUMAYUSI TW",
    template: "%s | GUMAYUSI TW",
  },

  description: "A fan-made archive and support project from Taiwan.",

  applicationName: "GUMAYUSI TW",

  keywords: [
    "Gumayusi",
    "GUMAYUSI",
    "Lee Min-hyung",
    "Gumayusi Taiwan",
    "T1",
    "Hanwha Life Esports",
    "HLE",
    "LCK",
    "League of Legends",
    "Taiwan Fan Project",
  ],

  authors: [
    {
      name: "GUMAYUSI TW",
    },
  ],

  creator: "GUMAYUSI TW",

  openGraph: {
    title: "GUMAYUSI TW",
    description: "A fan-made archive and support project from Taiwan.",
    url: "https://gumayusitw.com",
    siteName: "GUMAYUSI TW",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GUMAYUSI TW",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GUMAYUSI TW",
    description: "A fan-made archive and support project from Taiwan.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}