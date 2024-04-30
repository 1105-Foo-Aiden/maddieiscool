"use client";
import React from "react";
import Logo from "@/Assets/Logo.png";
import { Dropdown } from "flowbite-react";
import SignOut from "@/Assets/SignOut.png"

export default function NavbarComponent() {
  return (
    <div className="bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] min-h-28 flex justify-between">
      <img src={Logo.src} alt="Logo" className="ml-10 h-1/2"/>
      <Dropdown label=" " renderTrigger={() => <span className="mt-5 mr-5 w-20 h-20 border-solid border-2 border-black bg-blue-700 rounded-full"></span>} className="flex text-center w-fit border-solid border-2 rounded-md border-black">
        <Dropdown.Item className="text-black text-2xl flex text-center">
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
