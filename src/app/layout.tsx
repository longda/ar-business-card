import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ARScripts from "@/components/ARScripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AR Business Card",
  description: "An interactive augmented reality business card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ARScripts />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
