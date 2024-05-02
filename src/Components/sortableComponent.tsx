import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
    id: number;
    title: string;
    desc: string;
    priority: string;
    userPFP: string;
}

export const sortableComponent = () => {
    const [state, setState] = useState<ItemType[]>([
        { id: 1, title: "Test Login", desc: "A short description of the task you are viewing", priority: "2", userPFP: "string" },
        { id: 2, title: "Test Create Account", desc: "A short description of the task you are viewing", priority: "5", userPFP: "string" },
    ]);

    return (
        <ReactSortable list={state} setList={setState}>
            {state.map((item) => (
                <div className="inline-flex w-[23%]" key={item.id}>
                    <div className="bg-white rounded-2xl px-6 h-[168px]">
                        <p className="hammersmith text-2xl">{item.title}</p>
                        <p className="hammersmith text-base">{item.desc}</p>
                    </div>
                </div>
            ))}
        </ReactSortable>
    );
};