import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//Action
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

//ActionCreator
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//initialState
const initialState = {
    is_login: false,
    user: null,
};

//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) => {
            produce(state, (draft) => {
                draft.user = action.payload.user;
            });
        },
    },
    initialState
);

const actionsCreators = { setUser };
export { actionsCreators };
