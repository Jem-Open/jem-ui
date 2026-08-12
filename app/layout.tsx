import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Inter — the BODY face. Self-hosted at build time by next/font, so no runtime request to Google.
 *
 * It binds to `--font-inter` and globals.css points `--font-family-body` at that, rather than
 * next/font writing the token name directly. next/font generates a hashed family, so a token whose
 * value is the literal string "Inter" would never match it.
 *
 * This file previously did the opposite of the intended pairing: it bound Inter to
 * `--font-family-heading` and MANROPE to `--font-family-body`, overriding the design tokens with a
 * combination nothing ships. Satoshi is the display face and Inter carries running text.
 *
 * Satoshi is not loaded here — it is @font-face'd in globals.css from app/fonts, so Storybook (which
 * never renders this layout) gets it too.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Jem Design System",
  description: "Jem Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
