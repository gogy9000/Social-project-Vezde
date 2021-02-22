import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import state, { AddPost } from './state';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import state from './redux/state' ;
//import {AddPost} from './redux/state';







export let rerenderEntireTree =() => {

ReactDOM.render(
  <React.StrictMode>
    <App appstate={state} AddPost={AddPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
