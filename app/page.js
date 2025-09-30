import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
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
  <Navbar/>
  <Hero/>
   </div>
  );
}
