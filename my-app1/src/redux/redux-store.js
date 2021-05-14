import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import AppReducer from './App-reducer';
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer, reducer} from 'redux-form'

let reducers = combineReducers({
    Profile_Page : profileReducer,
    Messages_Page: dialogsReducer,
    Users_Page: usersReducer,
    auth: authReducer,
    app: AppReducer,
    form: formReducer
})

let store = createStore( reducers, applyMiddleware(thunkMiddleware) );

window.store = store

export default store;