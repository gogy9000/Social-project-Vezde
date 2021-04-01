import { combineReducers, createStore } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";

// debugger

let reducers = combineReducers({
    Profile_Page : profileReducer,
    Messages_Page: dialogsReducer
})

let store = createStore( reducers );

window.store = store

export default store;