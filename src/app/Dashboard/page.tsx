"use client";

import React, { useEffect, useState } from "react";
import NavbarComponent from "@/Components/NavbarComponent/page";
import Paintbrush from "@/Assets/Paintbrush.png";
import Pencil from "@/Assets/pencil.png";
import { Button, Modal, Popover } from "flowbite-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { IBoardCreation, IUser } from "@/Interfaces/Interfaces";
import { GetUserByUsername, CreateBoard } from "@/utils/DataServices";
import { Session } from "inspector";

export default function Dashboard() {
  const [OpenModal, setOpenModal] = useState(false);
  const [color, setColor] = useState("");
  const [imgbool, setimgBool] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("")
  const [data, setData] = useState<IUser>()
  const router = useRouter();
  const [boardName, setBoardName] = useState<string>()
  let date = new Date().toLocaleDateString();
  const [img, setImg] = useState<any>();

useEffect(() =>{
  let Sessionusername = sessionStorage.getItem("Username")
  Sessionusername? setUsername(Sessionusername) : setUsername("")
  if(username){
      const GetUserData = async () =>{
        const result = await GetUserByUsername(username)
        if(result){
        setData(result)
      }
      GetUserData()
    }
  }
  console.log(username)
}, [])

  useEffect(()=>{    
    GenerateColor()
  }, [img])


const CreateBoardFunc = async () =>{
    if(boardName == undefined){
      alert("Please enter a name for your board")
    }
    else{
      let BoardData = {
        boardName: boardName,
        username: username
      };
      const result = await CreateBoard(BoardData)
      result ? alert("Board Created successfully") : alert("Failed to create Board, please try again")
    }
  }

  const GenerateColor = () => {
    setImg(undefined)
    const randomBetween = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
    var r = randomBetween(0, 255);
    var g = randomBetween(0, 255);
    var b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb)
  };


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
      <NavbarComponent img={img? img : color}/>
      <div className="grid grid-cols-2">
        <div className="min-h-screen flex justify-center mt-10 cols-3">
          <div className="flex flex-col items-center hammersmith">
            <div
              style={{
                backgroundImage: imgbool? `url(${img})` : '',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor:  color,
                position: "relative",
                border: "solid",
                borderWidth: 2,
                borderRadius: "9999px",
                borderColor: "black",
                height: "24rem",
                width: "24rem",
              }}
            >
              <div className="absolute bottom-0 left-0">
                <Popover content={content} placement="bottom">
                  <Image src={Paintbrush.src} alt="change image" className="cursor-pointer" width={40} height={40} onClick={() => {GenerateColor(), setimgBool(false)}} />
                </Popover>
              </div>
              <div className="absolute bottom-0 right-0">
                <Popover content={content2} placement="bottom">
                  <CldUploadWidget uploadPreset="vo89jeia">
                    {({ open, results }) => {
                      if(results){
                        if(typeof results.info === "string"){
                          setImg(results.info)
                        }
                        else{
                          const info: any = results.info
                          setImg(info.url)
                        }
                      }
                      setimgBool(true)
                      return (
                        <Image src={Pencil.src} alt="random color" className="cursor-pointer" width={40} height={40} onClick={() => {open(), setimgBool(true)}} />
                      );
                    }}
                  </CldUploadWidget>
                </Popover>
              </div>
            </div>
            <div className="text-center mt-10 text-6xl font-bold">{username}</div>
            <div className="text-center text-4xl mt-5">Joined {date}</div>
          </div>
        </div>
        <div>
          <div className="border-solid border-black border-2 rounded-md h-2/3 w-[75%] mt-10">
            <div className=" text-5xl items-top hammersmith">
              <div className="flex justify-center">
                <p>My Boards</p>
                <button
                  onClick={() => setOpenModal(true)}
                  className="text-black text-5xl"
                >
                  +
                </button>
                <Modal show={OpenModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="bg-white grid grid-cols-2">
                      <div className="text-center hammersmith border-r-2 border-dotted">
                        <div className="text-3xl">Enter Code</div>
                        <br />
                        <input  type="text" placeholder="Enter Code Here" className="rounded-lg text-center text-blue-500" />
                        <br />
                        <br />
                        <div className="flex justify-center">
                          <Button type="button" className="bg-emerald-600 text-white w-20" onClick={() => setOpenModal(false)} >
                            Join
                          </Button>
                        </div>
                      </div>
                      <div className="text-center hammersmith">
                        <div className="text-3xl">Create New</div>
                        <br />
                        <input onChange={(e) => setBoardName(e.target.value)} type="text" placeholder="Name Board" className="rounded-lg text-center text-blue-500" />
                        <br />
                        <br />
                        <div className="flex justify-center">
                          <Button type="button" className="bg-emerald-600 text-white w-20" onClick={() => CreateBoardFunc()} >
                            Create
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="pt-9">
              <div
                className="hammersmith text-2xl min-h-24 w-[90%] ml-5 flex align-middle justify-between bg-[#AEE6D9]"
                onClick={() => router.push("/BoardPage")}
              >
                <div className="mt-7 ml-3">Your Board</div>
                <div
                  className="rounded-full w-12 h-12 border-2 border-solid border-black mr-5 mt-5"
                  style={{
                    backgroundColor: color,
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
