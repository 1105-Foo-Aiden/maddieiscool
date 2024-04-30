'use client'
import NavbarComponent from "@/Components/NavbarComponent/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IToken } from "@/Interfaces/Interfaces";
import { createNewAccount, loginToAccount } from "@/utils/DataServices";

export default function Home() {
  const [isCreate, setIsCreate] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();
  const Handle = () => {
    router.push("/Dashboard")
  };

  const passUserData = async () => {
    let userData = {
      username: username,
      password: password
    };
    console.log(userData);

    if (!isCreate) {
      let token: IToken = await loginToAccount(userData);
      if (token.token != null) {
        sessionStorage.setItem("Token", token.token);
        // sessionStorage.setItem("userId", String(userId?.id))
        router.push('/Profile');
      } else {
        alert("Login Failed");
      }
    } else {
      if (confirmPassword === password) {
        try {
          createNewAccount(userData);
        } catch {
          alert("Account creation failed - Username may be taken. Try Again")
        }
        alert("Account Created");
      } else {
        alert("Passwords do not match. Try Again")
      }
    }
  }

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
                  <div className="grid">
                    <p className="holtwood text-5xl mt-20 text-center">Create Account</p>

                    <p className="hammersmith text-2xl">Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="hammersmith h-12" type="text" />
                    <p className="hammersmith text-2xl">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="hammersmith h-24" type="password" />
                    <p className="hammersmith text-2xl">Confirm Password</p>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="hammersmith h-24" type="password" />

                    <button onClick={() => passUserData()} className="mt-10 hammersmith place-self-center text-[28px] text-white bg-[#0B7D61] rounded-2xl pt-3 pb-2 px-10">CREATE</button>
                    <p className="hammersmith text-center text-xl">Already have an account? <span><button onClick={() => setIsCreate(false)}> Login </button> </span> </p>
                  </div>
                  :
                  <div className="grid place-items-center">
                    <p className="holtwood">Login</p>

                    <p className="hammersmith text-2xl">Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="hammersmith h-24" type="text" />
                    <p className="hammersmith text-2xl">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="hammersmith h-24" type="password" />

                    <button onClick={() => passUserData()} className="hammersmith place-self-center text-[28px]">Login</button>
                    <p className="hammersmith text-center text-xl">Don't have an account? <span><button className="hammersmith text-xl" onClick={() => setIsCreate(true)}> Create one now! </button> </span> </p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
