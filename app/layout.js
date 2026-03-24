import { Geist, Geist_Mono, Fugaz_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugazOne = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Moodly",
  description: "Track your daily mood, everyday!",
};

export default function RootLayout({ children }) {
  const header = (
    <header
      className="p-4 sm:p-8 flex items-center justify-between
    gap-4"
    >
      <Link href={"/"}>
        <h1
          className={`text-base sm:text-lg textGradient ${fugazOne.className}`}
        >
          Moodly
        </h1>
      </Link>
      <div className="flex items-center justify-between">PLACEHOLDER STATS</div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 ${fugazOne.className}`}>
        Created with ❤️ by Abdelrahman Elsayed
      </p>
    </footer>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen
        flex flex-col text-slate-800 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
