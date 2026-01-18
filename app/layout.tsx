import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Filippo Alotta - Software Engineer',
  description: 'Portfolio of Filippo Alotta, Software Engineer',
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
          content="Filippo Alotta - Software Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Filippo Alotta, Software Engineer"
        />
      </head>
      <body className={`${rubik.variable} antialiased`}>
        <main className="mx-auto w-full max-w-[1600px] px-10">{children}</main>
      </body>
    </html>
  );
}
