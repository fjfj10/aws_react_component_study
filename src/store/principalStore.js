import { atom } from "recoil";

// npm i recoil로 

export const principalState = atom({
    key: "principalState",
    default: {
        userId: 0,
        userName: "",
        name: "",
        email: "",
        phon: ""
    }
})