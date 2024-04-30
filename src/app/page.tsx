'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IToken } from "@/Interfaces/Interfaces";
import { createNewAccount, loginToAccount } from "@/utils/DataServices";
import Logo from "@/Assets/Logo.png";
import EyeSlash from "@/Assets/EyeSlash.svg"

export default function Home() {
  const [isCreate, setIsCreate] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [tokens, setTokens] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);

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
        router.push("/Dashboard")
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

  useEffect(() => {
    setTokens(sessionStorage.getItem("Token"))

    if (tokens != null) {
      router.push("/Dashboard")
    }
  }, [])

  return (
    <div className="bg-[#F1FFFC] min-h-screen h-full">
      <div className="bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] min-h-28 flex justify-between">
        <img src={Logo.src} alt="Logo" className="ml-10 h-1/2" />
      </div>

      <button onClick={Handle} className="bg-black text-white">Go to Dashboard</button>

      <div className="grid place-items-center mt-32">
        <div className="w-[50%] mb-20 bg-[#3EBE9F]">
          <div className="flex justify-center">
            <div className="w-[80%]">
              {
                isCreate ?
                  <div className="grid pb-20">
                    <p className="holtwood text-5xl mt-24 text-center">Create Account</p>

                    <p className="hammersmith text-2xl mt-14 ml-2">Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-xl hammersmith h-14 border-none" type="text" />

                    <p className="hammersmith text-2xl mt-10 first-letter:ml-2">Password</p>
                    {
                      showPassword ? <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="text" /> : <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="password" />
                    }
                    <div className="relative -mt-12 mr-3 mb-2">
                      <img onClick={() => setShowPassword(!showPassword)} src={EyeSlash.src} alt="Enable/Disable Password Viewing" />
                    </div>

                    <p className="hammersmith text-2xl mt-10 ml-2">Confirm Password</p>
                    {
                      showConfirmPassword ? <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="text" /> : <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="password" />
                    }
                    <div className="relative -mt-12 mr-3 mb-2">
                      <img onClick={() => setShowConfirmPassword(!showConfirmPassword)} src={EyeSlash.src} alt="Enable/Disable Password Viewing" />
                    </div>

                    <button onClick={() => passUserData()} className="mt-10 mb-4 hammersmith place-self-center text-[28px] text-white bg-[#0B7D61] rounded-xl pt-3 pb-2 px-10">CREATE</button>
                    <p className="hammersmith text-center text-xl">Already have an account? <span><button className="hammersmith text-xl border-b-2 border-solid border-black h-[84%]" onClick={() => setIsCreate(false)}> Login </button> </span> </p>
                  </div>
                  :
                  <div className="grid pb-10">
                    <p className="holtwood text-5xl mt-24 text-center">Login</p>

                    <p className="hammersmith text-2xl mt-14 ml-2">Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-xl hammersmith h-14 border-none" type="text" />

                    <p className="hammersmith text-2xl mt-10 first-letter:ml-2">Password</p>
                    {
                      showLoginPassword ? <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="text" /> : <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl hammersmith h-14 border-none w-full" type="password" />
                    }
                    <div className="relative -mt-12 mr-3 mb-2">
                      <img onClick={() => setShowLoginPassword(!showLoginPassword)} src={EyeSlash.src} alt="Enable/Disable Password Viewing" />
                    </div>

                    <button onClick={() => passUserData()} className="mt-10 mb-5 hammersmith place-self-center text-[28px] text-white bg-[#0B7D61] rounded-xl pt-3 pb-2 px-10">LOGIN</button>
                    <p className="hammersmith text-center text-xl">Don't have an account? <span><button className="hammersmith text-xl border-b-2 border-solid border-black h-[95%]" onClick={() => setIsCreate(true)}> Create one now! </button> </span> </p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
