import { nanoid } from "nanoid"





export const compareById = (targetId) => (item) => item.id === targetId;



export const createMessage = (author, text) => ({
    author,
    text,
    id: nanoid(),
})



let chat_name = 'chat Name' + Date.now()
export const createChat = (chat_name) => ({
    chat_name,
    id: nanoid(),
})


