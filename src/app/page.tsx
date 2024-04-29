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
    <div className="bg-[#F1FFFC] min-h-screen h-full">
      <NavbarComponent />
      <button onClick={Handle} className="bg-black text-white">Go to Dashboard</button>

      <div className="grid place-items-center mt-32">
        <div className="w-[730px] h-[764px] mb-20 bg-[#3EBE9F]">
          <div className="flex justify-center">
            <div className="w-[80%]">
              <div className="grid place-items-center">
                <p className="holtwood">Create Account</p>

                <p className="hammersmith">Username</p>
                <input className="hammersmith" type="text" />
                <p className="hammersmith">Password</p>
                <input className="hammersmith" type="text" />
                <p className="hammersmith">Confirm Password</p>
                <input className="hammersmith" type="text" />

                <button className="hammersmith">Create</button>
                <p className="hammersmith">Already have an account? <span><a href="">Login</a></span> </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
