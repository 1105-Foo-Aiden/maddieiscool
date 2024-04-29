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
    <div className="bg-[#F1FFFC] min-h-full h-screen">
    <NavbarComponent/>
    <button onClick={Handle} className="bg-black text-white">Go to Dashboard</button>
    
      <div className="grid place-items-center mt-32">
        <div className="w-[730px] h-[764px] bg-[#3EBE9F]">
          <div className="flex justify-center">
            <div className="w-[80%]">
              <div className="grid place-items-center">
                <p>Create Account</p>

                <p>Username</p>
                <input type="text" />
                <p>Password</p>
                <input type="text" />
                <p>Confirm Password</p>
                <input type="text" />

                <button>Create</button>
                <p>Already have an account? <span><a href="">Login</a></span> </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
