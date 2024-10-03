import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeaderBorder } from "./_components/headerBorder";
import { Providers } from "./providers";
import ToggleTheme from "./_components/toogleTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebecca Fransson",
  description:
    "Results-driven and enthusiastic developer with a passion for creating features, building beautiful and reusable components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-screen`}>
        <Providers>
          <div className="sticky top-0 z-10 group text-white font-extrabold bg-white/70 dark:bg-black/70 backdrop-blur-sm">
            <div className="flex gap-4 justify-between sm:gap-10 items-center flex-wrap py-4 px-10">
              <h2>
                <Link href="/" className="cursor-pointer text-pink-400">
                  REBECCA FRANSSON
                </Link>
              </h2>
              <ToggleTheme />
            </div>
            <HeaderBorder />
          </div>

          {children}
        </Providers>
      </body>
    </html>
  );
}
