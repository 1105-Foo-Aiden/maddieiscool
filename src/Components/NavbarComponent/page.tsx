"use client";

import { Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "@/Assets/Logo.png";
import SignOut from "@/Assets/SignOut.png"
import Image from "next/image";

export default function NavbarComponent(props:any) {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] min-h-28 flex justify-between">
      <Image src={Logo.src} alt="Logo" className="ml-10 h-1/2" width={200} height={100} />
      <Dropdown label=" " renderTrigger={() => <span className="mt-5 mr-5 w-20 h-20 border-solid border-2 border-black rounded-full" style={{
        backgroundColor: props.img.includes("rgb") ? props.img : " ",
        backgroundImage: props.img.src ? props.img.src : " ",
      }}></span>} className="flex justify-center w-fit border-solid border-2 rounded-md border-black">
        <Dropdown.Item className="text-2xl text-center"onClick={() => router.push("/Dashboard")}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item className="text-green-400 text-2xl flex text-center">
          Create Board
        </Dropdown.Item>
        <Dropdown.Item className="text-rose-600 text-2xl flex text-center">
          Log Out <img src={SignOut.src} alt="Sign out" />
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
