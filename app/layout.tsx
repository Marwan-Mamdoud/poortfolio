import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marwan Mamdouh | Software Engineer",
  description:
    "Technical Precision Portfolio - Architecting robust, scalable enterprise solutions through technical precision and systems-level thinking.",
  openGraph: {
    title: "Marwan Mamdouh | Software Engineer",
    description:
      "Technical Precision Portfolio - Architecting robust, scalable enterprise solutions through technical precision and systems-level thinking.",
    images: [
      {
        url: "/mr-.jpg",
        width: 1200,
        height: 1200,
        alt: "Marwan Mamdouh - Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Mamdouh | Software Engineer",
    description:
      "Technical Precision Portfolio - Architecting robust, scalable enterprise solutions through technical precision and systems-level thinking.",
    images: ["/mr-.jpg"],
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
        <link rel="icon" href="/mr-.jpg" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-surface text-on-surface antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
