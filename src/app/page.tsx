'use client'
import NavbarComponent from "@/Components/NavbarComponent/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IToken } from "@/Interfaces/Interfaces";

export default function Home() {
  const [isCreate, setIsCreate] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();
  const Handle = () => {
    router.push("/Dashboard")
  };

  // const passUserData = async () => {
  //   let userData = {
  //     username: username,
  //     password: password
  //   };

  //   if (!isCreate) {
  //     let token: IToken = await * loginFunction * (userData);
  //     if (token.token != null) {
  //       localStorage.setItem("Token", token.token);
  //       sessionStorage.setItem("userId", String(userId?.id))
  //       router.push('/Profile');
  //     } else {
  //       alert("Login Failed");
  //     }
  //   } else {
  //     * createAccountFunction * (userData);
  //     alert("Account Created");
  //   }
  // }

  return (
    <div className="bg-[#F1FFFC] min-h-screen h-full">
      <NavbarComponent />
      <button onClick={Handle} className="bg-black text-white">Go to Dashboard</button>

      <div className="grid place-items-center mt-32">
        <div className="w-[730px] h-[764px] mb-20 bg-[#3EBE9F]">
          <div className="flex justify-center">
            <div className="w-[80%]">
              {
                isCreate ?
                  <div className="grid place-items-center">
                    <p className="holtwood text-5xl">CREATE ACCOUNT</p>

                    <p className="hammersmith">Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="hammersmith" type="text" />
                    <p className="hammersmith">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="hammersmith" type="text" />
                    <p className="hammersmith">Confirm Password</p>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="hammersmith" type="text" />

                    <button onClick={() => passUserData()} className="hammersmith">Create</button>
                    <p className="hammersmith">Already have an account? <span><button onClick={() => setIsCreate(false)}> Login </button> </span> </p>
                  </div>
                  :
                  <div className="grid place-items-center">
                    <p className="holtwood">Login</p>

                    <p className="hammersmith">Username</p>
                    <input value={username} className="hammersmith" type="text" />
                    <p className="hammersmith">Password</p>
                    <input value={password} className="hammersmith" type="text" />

                    <button onClick={() => passUserData()} className="hammersmith">Login</button>
                    <p className="hammersmith">Don't have an account? <span><button onClick={() => setIsCreate(true)}> Create one now! </button> </span> </p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
