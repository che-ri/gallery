import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectRouter } from "connected-react-router";

//pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
