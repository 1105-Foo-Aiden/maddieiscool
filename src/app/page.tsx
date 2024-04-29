'use client'
import NavbarComponent from "@/Components/NavbarComponent/page";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
    const Handle = () => {
        router.push("/Dashboard")
    };  
  return (
    <>
    <NavbarComponent/>
      <button onClick={Handle} className="bg-black text-white">Go to Dashboard</button>
    </>
    
    
  );
}
