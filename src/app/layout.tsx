import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Nathaniel Denny | Portfolio",
  description: "Nathaniel Denny – Mechanical Engineering @ Stanford. Experience and projects."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-background text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}

