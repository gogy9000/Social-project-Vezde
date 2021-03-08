import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import state, { AddPost } from './state';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import state from './redux/state' ;
//import {AddPost} from './redux/state';







export let rerenderEntireTree = (state) => {

ReactDOM.render(
  <BrowserRouter>
    <App state={state} AddPost={AddPost}/>
    </BrowserRouter>,
  document.getElementById('root')
);
}
