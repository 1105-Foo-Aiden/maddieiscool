import { IToken, IUserData } from "@/Interfaces/Interfaces";

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