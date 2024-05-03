"use client";
import NavbarComponent from "@/Components/NavbarComponent/page";
import { SortableComponent } from "@/Components/SortableComponent";
import React, { useState } from "react";

export default function BoardPage() {
  const [title, setTitle] = useState<string>("OUR BOARD")

  return (
    <>
      <NavbarComponent />

      <div className="bg-[#F1FFFC] min-h-screen h-full">
        <div className="flex justify-center">
          <div className="w-[90%]">
            <div className="text-3xl hammersmith container pt-12">{title}</div>

            <div className="flex justify-center pt-14">
              <SortableComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
