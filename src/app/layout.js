import localFont from "next/font/local";
import { Reenie_Beanie } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-reenie-beanie',
});

export const metadata = {
  title: "Athena Wang",
  description: "A personal website for Athena Wang, made with ♥ by Alex",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${reenieBeanie.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
