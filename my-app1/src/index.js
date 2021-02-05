import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let Dialogs_data = [
  { id: 1, name: 'Motherfucker2'},
  { id: 2, name: 'motherfucker5'},
  { id: 3, name: 'motherfucker6'},
  { id: 4, name: 'motherfucker35'},
  { id: 5, name: 'motherfucker36'},
  { id: 6, name: 'motherfucker878'},
] 
 
 let Message_data= [
  { id:1, message:'Fuck you1' },
  { id:1, message:'Fuck you1' },
  { id:1, message:'Fuck you1' },
  { id:1, message:'Fuck you2' },
  { id:1, message:'Fuck you1' },
  { id:1, message:'Fuck you1' },
]

let Post_item_data= [
  {id:1, Post_item: 'Hello motherfucker!', Like:121},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
  {id:1, Post_item: 'Hello motherfucker!', Like:123},
]





ReactDOM.render(
  <React.StrictMode>
    <App Post_item_data={Post_item_data}
      Dialogs_data={Dialogs_data}
      Message_data={Message_data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
