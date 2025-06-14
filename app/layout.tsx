import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Filippo Alotta - FrontEnd Developer",
  description: "Portfolio of Filippo Alotta, FrontEnd Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Filippo Alotta - FrontEnd Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Filippo Alotta, FrontEnd Developer"
        />
      </head>
      <body className={`${rubik.variable} antialiased`}>
        <main className="w-full mx-auto max-w-[1600px] px-10">{children}</main>
      </body>
    </html>
  );
}
