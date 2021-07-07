import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//Action
const SET_USER = "user/SET_USER";
const GET_USER = "user/GET_USER";
const LOG_OUT = "user/LOG_OUT";

//ActionCreator
const setUser = createAction(SET_USER, user => {
    return { user };
});
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

//initialState
const initialState = {
    is_login: false,
    user: null,
};

//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, draft => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
    },
    initialState
);

const actionsCreators = { setUser };
export { actionsCreators };
