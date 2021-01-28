
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';






const App = (props) => {
  return (
   <BrowserRouter>
    <div className='app-wrapper' >
      <Header />
      <Nav />
      
      <div className = 'app-wrapper-content'>
        <Route path='/Dialogs' component={Dialogs} />
      
      <Route path='/Profile' component={Profile} />
      <Route path='/Music' component={Music} />
      <Route path='/Settings' component={Settings} />
       </div>
    </div>
    </BrowserRouter>
    ); 
  
}
    
    
  


export default App;
