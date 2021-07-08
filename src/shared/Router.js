import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

//pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Redirect to="/" />
            </Switch>
        </ConnectedRouter>
    );
};

export default Router;
