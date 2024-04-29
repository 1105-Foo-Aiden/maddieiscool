"use client";
import React from "react";
import NavbarComponent from "../../Components/NavbarComponent/page";
import Paintbrush from '@/Assets/Paintbrush.png'
import Pencil from '@/Assets/pencil.png'

export default function Dashboard() {
  return (
    <>
      <NavbarComponent />
      <div className="grid grid-cols-2">
        <div className="min-h-screen flex justify-center mt-10 cols-3">
          <div className="flex flex-col items-center hammersmith">
            <div className="h-96 w-96 rounded-full bg-blue-500 border-solid border-2 relative border-black">
              <div className="absolute bottom-0 left-0">
                <img src={Paintbrush.src} alt="change image"/>
              </div>
              <div className="absolute bottom-0 right-0">
                <img src={Pencil.src} alt="random color"/>
              </div>
            </div>
            <div className="text-center mt-10 text-4xl font-bold">Username</div>
            <div className="text-center text-4xl font-bold mt-5">Joined now</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center border-solid border-black border-2 rounded-md h-2/3 w-[75%] mt-10"></div>
        </div>
      </div>
    </>
  );
}
