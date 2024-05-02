import { IBoardCreation, IToken, IUser, IUserData } from "@/Interfaces/Interfaces";

const url = "https://khuthjgrouptaskmanager.azurewebsites.net/";

export const createNewAccount = async (create: IUserData) => {
    const res = await fetch(url + 'User/CreateUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(create)
    });

    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
}

export const loginToAccount = async (login: IUserData) => {
    const res = await fetch(url + "User/Login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(login)
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
}

export const GetBoardByBoardID = async (id: number) => {
    const res = await fetch(url + "Board/GetBoardByBoardID/" + id)
    
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data;
}

export const GetUserByUsername = async (username: string) => {
    const res = await fetch(url + "User/GetUserByUsername/" + username, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data: IUser = await res.json();
    return data
}

export const CreateBoard = async (boardToCreate: IBoardCreation) => {
    const res = await fetch(url + "Board/CreateBoard", {
        method: "POST",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(boardToCreate)

    })
    if(!res.ok){
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }
    const data: boolean = await res.json();
    return data;
}