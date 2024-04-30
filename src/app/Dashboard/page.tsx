"use client";
import React, { useState } from "react";
import NavbarComponent from "@/Components/NavbarComponent/page";
import Paintbrush from "@/Assets/Paintbrush.png";
import Pencil from "@/Assets/pencil.png";
import { Button, Modal, Popover } from "flowbite-react";

export default function Dashboard() {
  const [OpenModal, setOpenModal] = useState(false);

  const content = (
    <div className="w-48 text-sm text-white text-center">
      <div className="border-b border-gray-900 bg-black px-3 py-2">
        <h3 className="text-white">Randomize Color</h3>
      </div>
    </div>
  );

  const content2 = (
    <div className="w-32 text-sm text-white text-center">
      <div className="border-b border-gray-900 bg-black px-3 py-2">
        <h3 className="text-white">Profile Picture</h3>
      </div>
    </div>
  );

  return (
    <>
      <NavbarComponent />
      <div className="grid grid-cols-2">
        <div className="min-h-screen flex justify-center mt-10 cols-3">
          <div className="flex flex-col items-center hammersmith">
            <div className="h-96 w-96 rounded-full bg-blue-500 border-solid border-2 relative border-black">
              <div className="absolute bottom-0 left-0">
                <Popover content={content} placement="bottom">
                  <img src={Paintbrush.src} alt="change image" />
                </Popover>
              </div>
              <div className="absolute bottom-0 right-0">
                <Popover content={content2} placement="bottom">
                  <img src={Pencil.src} alt="random color" />
                </Popover>
              </div>
            </div>
            <div className="text-center mt-10 text-6xl font-bold">USERNAME</div>
            <div className="text-center text-4xl mt-5">Joined 12/19/1937</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center border-solid border-black border-2 rounded-md h-2/3 w-[75%] mt-10">
            <div className="flex text-5xl items-top justify-center hammersmith">
              <p>My Boards</p>
              <div>
              <Button onClick={() => setOpenModal(true)} className="text-black text-5xl">+</Button>
                <Modal show={OpenModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header className="text-white">  
                  </Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <div className="grid-rows-3 items-center text-center hammersmith">
                        <div className="text-white text-base">
                          Enter Code
                        </div>
                        <input type="text" placeholder="Enter Code Here" className="rounded-lg text-center text-blue-500"/>
                        <br />
                        <br />
                      <Button type="button" className="bg-emerald-700 text-white w-20 flex justify-center">Create</Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
