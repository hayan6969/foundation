import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'


const myFont = localFont({ src: './fonts/Satoshi-Variable.woff2' })
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
