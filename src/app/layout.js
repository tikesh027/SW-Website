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
        <div className="flex items-start min-h-screen">
          <div className="w-[70%] px-11 py-[24px] flex-grow min-h-screen">
            {children}
          </div>
          {/* Conditionally render RightSidebar */}
          {pathname !== "/pages/posts" && (
            <>
              <div className="min-h-screen border-r-4 border-black flex-grow-0 flex-shrink-0"></div>
              <div className="w-[30%] p-4 px-10 py-[80px] min-h-screen">
                <RightSidebar />
              </div>
            </>
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
