import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import About from "@/components/about"
import Support from "@/components/support"
import { Backgound } from "@/public/assets";
export default function Home() {
  return (
   <div
   style={{
    backgroundImage: `url(${Backgound.src})`,
    backgroundPosition: "bottom",
    backgroundSize: "full",
    backgroundRepeat: "repeat",
  }}
  className="min-h-screen  px-2 ">
    <div className="flex flex-col ">

  <Navbar/>
  <Hero/>
  <About/>
  <Support/>
    </div>
   </div>
  );
}
