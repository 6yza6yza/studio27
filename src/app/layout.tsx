import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { LenisProvider } from "@/components/layout/LenisProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Studio 27 — Architecture & Interior Design · Prishtina, Kosovo",
  description:
    "Studio 27 is an architecture and interior design studio in Prishtina, Kosovo. We design spaces that blend warm materials, clean lines, and handcrafted details — built to age beautifully.",
  keywords: [
    "architecture",
    "interior design",
    "Prishtina",
    "Kosovo",
    "Studio 27",
    "residential design",
    "commercial design",
  ],
  authors: [{ name: "Studio 27" }],
  openGraph: {
    title: "Studio 27 — Architecture & Interior Design",
    description:
      "Architecture and interior design studio in Prishtina, Kosovo. Warm materials, clean lines, handcrafted details.",
    url: "https://studio27.co",
    siteName: "Studio 27",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 27 — Architecture & Interior Design",
    description:
      "Architecture and interior design studio in Prishtina, Kosovo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Playfair Display & JetBrains Mono from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Satoshi from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          storageKey="studio27-theme"
        >
          <LenisProvider>
            <GrainOverlay />
            <div className="grid-lines relative min-h-screen">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
