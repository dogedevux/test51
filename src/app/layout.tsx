import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../public/fonts/Skribble.ttf' })

export const metadata: Metadata = {
  title: "SoundCum",
  description: "Lissen to your Fav Artits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
