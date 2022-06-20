import { nanoid } from "nanoid";


const createChatMock = (i) => ({
    id: nanoid(),
    name: `Chat ${i}`
});


export const CHATS = Array.from({ length:10 }).map((_,i) => {
    return (
        createChatMock(i)
    )
});