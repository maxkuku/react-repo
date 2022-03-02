

export const getUserReducer = (state) => state.user;
export const getUser = (state) => getUserReducer(state).user;
export const getUserId = (state) => getUser(state)?.uid || null;
export const getIsAuth = (state) => state.user.user !== null;

