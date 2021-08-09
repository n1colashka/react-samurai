import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;