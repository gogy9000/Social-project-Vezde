import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import storeContext from './store-context';
//import  { AddPost, updateNewPostText } from './redux/state';







//debugger
   let rerenderEntireTree = (state) => {
   //debugger
ReactDOM.render(
  <BrowserRouter>
    <storeContext.Provider value={store}>
       <App /*state={state} dispatch= {store.dispatch.bind(store)}*/ store={store} />
    </storeContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
  }
rerenderEntireTree(store.getState())


store.subscribe (() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

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

