import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import NextAuthSessionProvider from "@/providers/sessionProvider";

export const avgardd = localFont({ src: "../../public/fonts/AVGARDD_2.woff" });

const metadata: Metadata = {
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
            <main className="antialiased scroll-smooth">{children}</main>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
