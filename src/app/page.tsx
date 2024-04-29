'use client'

import NavbarComponent from "@/Components/NavbarComponent/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="bg-[#F1FFFC] min-h-full h-screen">
      <NavbarComponent />

      <div className="grid place-items-center mt-32">
        <div className="w-[730px] h-[764px] bg-[#3EBE9F]">
          <div className="flex justify-center">

          </div>
        </div>
      </div>
    </div>

  );
}
