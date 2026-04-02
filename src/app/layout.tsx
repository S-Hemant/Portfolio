import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hemant Kumar S | Portfolio",
  description: "Immersive 3D interactive portfolio for Hemant Kumar S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased no-scrollbar`}
    >
      <body className="min-h-full flex flex-col no-scrollbar">
        {children}
      </body>
    </html>
  );
}
