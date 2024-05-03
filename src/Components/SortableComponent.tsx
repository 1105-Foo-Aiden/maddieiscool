import { ItemType, TopItemType } from "@/Interfaces/Interfaces";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

export const SortableComponent = () => {
    const [dummyTopData, setDummyTopData] = useState<TopItemType[]>([
        { id: 1, CatTitle: "To-Do", color: "AEE6D9" },
        { id: 2, CatTitle: "In Progress", color: "6FDFC4" },
        { id: 3, CatTitle: "Completed", color: "3EBE9F" }
    ]);
    const [dummyData, setDummyData] = useState<ItemType[]>([
        { id: 1, title: "1 Test Login", desc: "A short description of the task you are viewing", priority: "2", userPFP: "string", CatTitle: "To-Do" },
        { id: 2, title: "1 Test Create Account", desc: "A short description of the task you are viewing", priority: "5", userPFP: "string", CatTitle: "To-Do", },
        { id: 3, title: "2 Test Login", desc: "A short description of the task you are viewing", priority: "2", userPFP: "string", CatTitle: "In Progress" },
        { id: 4, title: "2 Test Create Account", desc: "A short description of the task you are viewing", priority: "5", userPFP: "string", CatTitle: "In Progress", },
        { id: 5, title: "3 Test Login", desc: "A short description of the task you are viewing", priority: "2", userPFP: "string", CatTitle: "Completed" },
        { id: 6, title: "3 Test Create Account", desc: "A short description of the task you are viewing", priority: "5", userPFP: "string", CatTitle: "Completed", },
    ]);

    return (
        <div className="mx-10 w-full">
            <ReactSortable list={dummyTopData} setList={setDummyTopData}>
                {dummyTopData.map((topItem) => (
                    <div key={topItem.id} className="bg-[#AEE6D9] h-[252px] rounded-lg my-6">
                        <div>
                            <p>{topItem.CatTitle}</p>
                        </div>
                        <div className="pl-8 py-6">
                            <ReactSortable list={dummyData} setList={setDummyData}>
                                {
                                    dummyData.filter(items => (items.CatTitle === topItem.CatTitle)).map((item) => (
                                        <div className="inline-flex w-[23%] ml-8" key={item.id}>
                                            <div className="bg-white rounded-2xl px-6 h-[168px]">
                                                <p className="hammersmith text-2xl">{item.title}</p>
                                                <p className="hammersmith text-base">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ReactSortable>
                        </div>
                    </div>
                ))}
            </ReactSortable>
        </div>
    );
}; 