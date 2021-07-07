import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

//modules
import User from "./modules/user";

//history
export const history = createBrowserHistory();

//root reducer
const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

//enviroment
const env = process.env.NODE_ENV;
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

//middleware
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//store
let store = initialStore => createStore(rootReducer, enhancer);

export default store();
