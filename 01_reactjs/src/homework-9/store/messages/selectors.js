
export const getMessagesFromStore = (state) => state.messages || {};
export const getMessages = (state) => getMessagesFromStore(state).messages || {};
export const getChatMessageById = (chatId) => (state) => getMessages(state)[chatId]