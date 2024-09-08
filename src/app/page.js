import Image from "next/image";
import Navbar from "../components/Navbar/index";
import LandingPage from "@/components/LandingPage/LandingPage";
export default function Home() {
  return (
    <main>
      <div className="w-full h-[100px] bg-white flex justify-center text-2xl">
        ADS
      </div>
      <div className="z-10 items-center justify-between font-mono text-sm">
        <Navbar />
      </div>
      <div>
        <LandingPage />
      </div>
    </main>
  );
}
