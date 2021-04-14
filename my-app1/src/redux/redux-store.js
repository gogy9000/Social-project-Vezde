import { combineReducers, createStore } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";

// debugger

let reducers = combineReducers({
    Profile_Page : profileReducer,
    Messages_Page: dialogsReducer,
    Users_Page: usersReducer,
    auth: authReducer
})

let store = createStore( reducers );

window.store = store

export default store;