import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import AppReducer from './App-reducer'
import photosReducer from './photo-reducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: AppReducer,
    photosPage: photosReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));


// @ts-ignore
window._store_ = store

export default store;