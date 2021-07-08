import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { auth } from "../../shared/firebase";
import { history } from "../configureStore";
import firebase from "firebase/app";

//Action
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

//ActionCreator
//user이라는 정보를 객체로 묶으면 user안에 정보들이 쏙쏙 들어가겠죠? :-)
const setUser = createAction(SET_USER, user => ({ user })); //setUser은 정보를 받아서 리덕스스토어에 저장하는 역할입니다.
const logOut = createAction(LOG_OUT, user => ({ user }));

//initialState
const initialState = {
    is_login: false,
    user: null,
};

//middleware actions
const signupFB = (id, pwd, user_name) => {
    return function (dispatch, getState, { history }) {
        //유저 생성
        auth.createUserWithEmailAndPassword(id, pwd) //신규 사용자 가입
            .then(user => {
                auth.currentUser
                    .updateProfile({
                        //프로필 업데이트
                        displayName: user_name, //firebase auth 상의 유저정보를 업데이트한다.
                    })
                    .then(() => {
                        dispatch(
                            setUser({
                                //얘는 setUser에 보낼 데이터!
                                user_name,
                                id,
                                user_profile: "",
                                uid: user.user.uid,
                            })
                        );
                        history.push("/login");
                        window.alert("회원가입 완료!");
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

const loginFB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        //세션스토리지에 FB정보를 저장합니다.
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                //signIn하기
                auth.signInWithEmailAndPassword(id, pwd).then(
                    //기존 사용자 로그인
                    user =>
                        dispatch(
                            setUser({
                                //회원가입할때 displayName을 직접 바꿨으니, 로그인할땐 서버에 있는 정보 가져오면 되겠죠?
                                user_name: user.user.displayName,
                                id: id,
                                user_profile: "",
                                uid: user.user.uid,
                            })
                        )
                );
                history.push("/");
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

const loginCheckFB = () => {
    return function (dispatch, getState, { history }) {
        auth.onAuthStateChanged(user => {
            //현재 로그인한 사용자 가져오기
            if (user) {
                //로그인한 사용자가 있으면 리덕스스토어에 계속 유저데이터주입
                dispatch(
                    setUser({
                        user_name: user.displayName,
                        id: user.email,
                        user_profile: "",
                        uid: user.uid,
                    })
                );
            } else {
                //유저정보가 없으면 로그아웃합니다.
                dispatch(logOut());
                history.push("/login");
            }
        });
    };
};

const logOutFB = () => {
    //로그아웃을 하면 저장되어있는 세션스토리지의 FB정보도 삭제시킵니다.
    return function (dispatch, getState, { history }) {
        auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => dispatch(logOut()))
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};
//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            //FB에서 정보를 가져오면 state에 저장합니다.
            produce(state, draft => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            //state를 삭제합니다.
            produce((state, draft) => {
                draft.user = null;
                draft.is_login = false;
            }),
    },
    initialState
);

const actionCreators = { signupFB, loginFB, loginCheckFB, logOutFB };
export { actionCreators };
