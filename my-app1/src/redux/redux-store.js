import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import AppReducer from './App-reducer'
import photosReducer from './photo-reducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    Profile_Page: profileReducer,
    Messages_Page: dialogsReducer,
    Users_Page: usersReducer,
    auth: authReducer,
    app: AppReducer,
    photosPage: photosReducer,
    form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));



window._store_ = store

export default store;