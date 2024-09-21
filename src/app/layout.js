"use client";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer/Footer";
import RightSidebar from "./pages/LandingPage/LandingPageComponents/Right-Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="w-full h-[150px] bg-white flex justify-center text-2xl items-center">
            ADS
          </div>
          <div className="z-10 items-center justify-between font-mono text-sm">
            <Navbar />
          </div>
        </header>
        <div className="flex flex-col md:flex-row items-start min-h-screen">
          <div className="w-full md:w-[70%] px-4 md:px-11 py-[24px] flex-grow min-h-screen md:!border-r-4 md:!border-black !border-0">
            {children}
          </div>

          {pathname !== "/pages/posts" && (
            <div className="hidden md:flex w-[30%] p-4 md:px-10 py-[20px] min-h-screen">
              <RightSidebar />
            </div>
          )}
        </div>

        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
