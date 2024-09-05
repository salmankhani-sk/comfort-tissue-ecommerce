import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Comfort",
  description: "Discover the ultimate softness and strength with Comfort Essentials, your one-stop destination for premium tissue products designed to provide unparalleled comfort and care for your everyday needs.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
