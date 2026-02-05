import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-family-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-family-body",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
