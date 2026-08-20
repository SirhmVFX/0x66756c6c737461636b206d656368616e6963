import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";
import Garage from "@/components/Garage";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "0x Mechanic — Ganiu Samuel",
    template: "%s — Ganiu Samuel",
  },
  description:
    "Ganiu Samuel (sirhmvfx) — The Fullstack Mechanic. Switchable portfolio for fullstack, frontend, backend, and cloud/devops employers. 0x66756c6c737461636b206d656368616e6963.",
  authors: [{ name: "Ganiu Samuel" }],
  openGraph: {
    title: "The Fullstack Mechanic — Ganiu Samuel",
    description:
      "A four-bay software engineering portfolio. Decode the serial. Share the right role.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${serif.variable} ${geistMono.variable} antialiased`}>
        <Garage />
        {children}
      </body>
    </html>
  );
}
