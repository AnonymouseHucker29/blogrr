import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import NextAuthSessionProvider from "../providers/sessionProvider";

const avgardd = localFont({ src: "../../public/fonts/AVGARDD_2.woff" });

export const metadata: Metadata = {
  title: "Blogrr",
  description: "A blog starter built using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={avgardd.className}>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
