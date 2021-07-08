import React, { useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Router from "./Router";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
    actionCreators,
    actionCreators as userActions,
} from "../redux/modules/user";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreators.loginCheckFB());
    }, []);
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
