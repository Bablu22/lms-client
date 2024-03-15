import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Header from "./Header";
import Footer from "./components/Footer";
import "./globals.css";
import ThemeProvider from "./utils/ThemeProvider";
import StoreProvider from "./utils/StoreProvider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Education Temp",
  description:
    "Education Temp is a modern education platform for everyone. Learn, teach, and study with Education Temp.",
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
