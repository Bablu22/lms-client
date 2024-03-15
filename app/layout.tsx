import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./Header";
import Footer from "./components/Footer";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import StoreProvider from "./utils/StoreProvider";
import ThemeProvider from "./utils/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduTech | Modern Education Platform",
  description:
    "Education Temp is a modern education platform for everyone. Learn, teach, and study with Education Temp.",
  keywords: "education, learn, teach, study, courses, tutorials, resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#FCD980" />
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="light">
          <StoreProvider>
            <Header />
            <main className="text-slate-900 dark:text-slate-200 dark:bg-gray-950">
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
