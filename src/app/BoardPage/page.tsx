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

            <div className="flex justify-center pt-16">
              <div className="w-[94%]">

                <div className="bg-[#AEE6D9] w-[1219px] h-[252px] rounded-lg my-6">
                  <div>
                    <p>To-Do</p>
                  </div>
                  <div className="pl-12 py-6">
                    {SortableComponent()}
                  </div>



                </div>

                <div className="bg-[#6FDFC4] w-[1219px] h-[252px] rounded-lg my-6">
                  {/* <Draggable onStop={checkIfInBoundary}>
                    <div className="w-[269px] h-[168px] bg-white rounded-lg">

                    </div>
                  </Draggable> */}


                </div>

                <div className="bg-[#3EBE9F] w-[1219px] h-[252px] rounded-lg my-6">
                  {/* <Draggable onStop={checkIfInBoundary}>
                    <div className="w-[269px] h-[168px] bg-white rounded-lg">

                    </div>
                  </Draggable> */}


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
