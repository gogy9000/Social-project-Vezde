import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
//import  { AddPost, updateNewPostText } from './redux/state';








   let rerenderEntireTree = (state) => {

ReactDOM.render(
  <BrowserRouter>
    <App state={state} dispatch= {store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
  document.getElementById('root')
);
  }
rerenderEntireTree(store.getState())


store.subscribe (rerenderEntireTree);

//rerenderEntireTree(state);


/*ReactDOM.render(
  <React.StrictMode>
    <App appstate={state} AddPost={AddPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

