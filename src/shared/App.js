import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Router from "./Router";
import Header from "../components/Header";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
