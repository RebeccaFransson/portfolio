import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeaderBorder } from "./_components/headerBorder";
import { Providers } from "./providers";
import ToggleTheme from "./_components/toogleTheme";
import { ScrollToLink } from "./_components/scrollToLink";

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
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <Providers>
          <div className="sticky top-0 z-20 group text-white  bg-white/70 dark:bg-black/70 backdrop-blur-sm">
            <div className="flex gap-4 justify-between sm:gap-10 items-center flex-wrap py-4 px-10">
              <div className="flex gap-4">
                <Link
                  href="/"
                  className="text-pink-400 font-extrabold hover:text-pink-500 cursor-pointer"
                >
                  <h2 className="pr-4">REBECCA FRANSSON</h2>
                </Link>

                <ScrollToLink
                  id="aboutMe"
                  className="text-pink-400 hover:text-pink-500"
                >
                  ABOUT
                </ScrollToLink>
              </div>
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
