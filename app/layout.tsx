import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeaderBorder } from "./_components/headerBorder";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} h-screen`}>
        <div className="sticky top-0 z-10 group  text-white font-extrabold  bg-gradient-to-l from-blue-900 to-black">
          <div className="flex gap-4 sm:gap-10 items-center flex-wrap py-4 px-10">
            <h2>
              <Link href="/" className="cursor-pointer">
                REBECCA FRANSSON
              </Link>
            </h2>
          </div>
          <HeaderBorder />
        </div>

        {children}
      </body>
    </html>
  );
}
