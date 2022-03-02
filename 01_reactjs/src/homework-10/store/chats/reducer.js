import {ADD_CHAT, SET_CHATS, REMOVE_CHAT} from "./actions"


const initialState = {
    chats: {},
}


export const chatsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_CHAT: {
            return {
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        }
        case SET_CHATS: {
            return {
                chats: [...action.payload]
            }
        }
        case REMOVE_CHAT: {
            return {
                chats: state.chats.filter((item) => item.id !== action.paylod)
            }
        }

        default: {
            return state;
        }
    }

}